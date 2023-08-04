async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}
function formatDateAndTime(inputDate: any) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // January is month 0
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function getRandomTailwindColor() {
  const colorShades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
  const randomColor = Math.floor(Math.random() * colorShades.length);

  const colors = [
    "bg-red",
    "bg-blue",
    "bg-green",
    "bg-yellow",
    "bg-pink",
    "bg-purple",
    "bg-indigo",
    "bg-teal",
    // Add more color classes if needed
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return `${colors[randomIndex]}-${colorShades[randomColor]}`;
}



export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1 className="text-3xl pt-3 font-bold pb-10">notes/{note.id}</h1>
      <div className={`${getRandomTailwindColor} rounded-lg p-4 shadow-2xl w-80 h-60`}>
        <h2 className="font-semibold text-xl pt-4 pb-6">{note.title}</h2>
        <h5 className="text-base pb-6 font-semibold">{note.content}</h5>
        <p className="text-sm">{formatDateAndTime(note.created)}</p>
      </div>
    </div>
  );
}
