'use client';
import Note from "../components/Note";
import PocketBase from "pocketbase";
import TopBar from "../components/TopBar";

// this route will fetch all the notes from PocketBase
// and provide a form to create a new note

// NEXT components get rendered on the server and we can do data fetching directly inside of them
// with async, await

// to change caching behavior in next 13:
export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb.collection("notes").getList(1, 50);
  return data?.items as any[];
}

// this Server Side component is marked async
export default async function NotesPage() {
  // inside the component, to fetch data: await a call to getNotes()
  const notes = await getNotes();

  return (
    <>
      <TopBar />
      {/* <AnimatePresence initial={false}>
        <div className="flex flex-wrap gap-4">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </AnimatePresence> */}
      <div className="flex flex-wrap gap-4 max-h-[500px] hover:overflow-y-auto overflow-hidden">
        {notes?.reverse().map((note) => {
          return <Note bgColor={'bg-blue-500'} key={note.id} noteId={note.id} note={note} />;
        })}
      </div>
    </>
  );
}
