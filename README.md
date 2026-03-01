# 🎵 Collaborative Music Player
A real-time collaborative music player where groups (college labs, offices, hostels) can democratically decide what music plays next using live voting and shared queues.

Instead of one person controlling the playlist, everyone in the room gets a voice.

## 🚀 Features

### 🔐 Room-Based Collaboration

* Create a music room with a unique room code
* Join existing rooms instantly
* One room = one shared music queue
  
### 🔍 Music Discovery

* Search tracks using a global search bar
* View recently played tracks in the room
* Prevent duplicate songs in the queue
  
### Voting System

* Upvote songs you want to hear next
* Songs are automatically reordered based on votes
* One user = one vote per song (fair play!)
  
### Smart Queue Management

* Highest-voted song plays next
* Tie-breaking using time of addition
* Auto-move played songs to “Recently Played”
  
### 👑 Admin Controls

* Room creator becomes the admin
* Skip or remove songs

## 🧠 Use Cases

* College labs & classrooms
* Office workspaces
* Group study rooms
* House parties & hostels

## 🛠️ Tech Stack

### Frontend
* **Next.js** – App Router & Server Components
* **Tailwind CSS** – Utility-first styling
* **TypeScript** – Type safety

### Backend
* **Next.js** API Routes
* **WebSockets** – Real-time voting & queue sync

### Database
* **PostgreSQL**
* **Prisma ORM** – Type-safe database access

## 📦 Installation & Setup

1. Clone the Repository
```bash
git clone https://github.com/your-username/collaborative-music-player.git
cd collaborative-music-player
```
2. Install Dependencies
```
npm install 
```
3. Setup Environment Variables
```
cp .env.example .env
```
4. Setup Database
```
npx prisma generate
npx prisma migrate dev
```
5. Run the app
```
npm run dev
```

