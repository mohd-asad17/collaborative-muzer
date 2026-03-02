import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import youtubesearchapi from "youtube-search-api";

const YT_REGEX = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;


const createStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const data =  createStreamSchema.parse( await  req.json());
    const isYt = data.url.match(YT_REGEX);
    if (!isYt) {
      return NextResponse.json(
        {
          message: "Wrong url format",
        },
        {
          status: 411,
        },
      );
    }

    const extractedId = data.url.split("?v=")[1];
    const res = await youtubesearchapi.GetVideoDetails(extractedId);
    const thumbnails = res.thumbnail.thumbnails;
    thumbnails.sort((a: {width: number}, b: {width: number}) => a.width < b.width ? -1 : 1);

   const stream = await prisma.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "Youtube",
        title: res.title ?? "Can't find video",
        smallThumbnailImg: thumbnails.length > 1 ? thumbnails[thumbnails.length -2].url : thumbnails[thumbnails.length -1].url ?? "https://picjumbo.com/",
        bigThumbnailImg: thumbnails[thumbnails.length -1].url ?? "https://picjumbo.com/"
      },
    });
    return NextResponse.json({
      message: "Added Stream",
      id: stream.id
    })
  } catch (e) {
    return NextResponse.json(
      {
        message: "error while adding a stream",
      },
      {
        status: 411,
      },
    );
  }
}

export async function GET(req: NextRequest){
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams  = await prisma.stream.findMany({
    where: {
      userId: creatorId ?? ""
    }
  })

  return NextResponse.json({
    streams
  })
}