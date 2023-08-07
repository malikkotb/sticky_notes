import Note from "./components/Note";
import PocketBase from "pocketbase";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";

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
  const notes = await getNotes();

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 pl-10 mt-12">
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
              return (
                <Note
                  bgColor={note.color}
                  key={note.id}
                  noteId={note.id}
                  note={note}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
