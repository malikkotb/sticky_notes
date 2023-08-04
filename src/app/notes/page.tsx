import Note from "../components/Note";
// import axios from "axios";
import PocketBase from 'pocketbase';

// this route will fetch all the notes from PocketBase
// and provide a form to create a new note

// NEXT components get rendered on the server and we can do data fetching directly inside of them
// with async, await

// to change caching behavior in next 13:
export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

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
      <h1 className="text-3xl pt-3 font-bold pb-10">Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </>
  );
}
