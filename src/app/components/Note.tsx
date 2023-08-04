import Link from "next/link";

function formatDateAndTime(inputDate: any) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // January is month 0
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function getRandomTailwindColor() {
  const colorShades = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];
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

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div
        className={`${getRandomTailwindColor} relative transition-transform hover:-translate-y-2 duration-200 rounded-3xl p-4 shadow-2xl w-80 h-60`}
      >
        <h2 className="font-semibold text-xl pt-4 pb-6">{title}</h2>
        <h5 className="text-base pb-6 font-semibold">{content}</h5>
        <p className="text-sm absolute bottom-4">
          {formatDateAndTime(created)}
        </p>
      </div>
    </Link>
  );
}
