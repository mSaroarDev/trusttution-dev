// import Image from "next/image";

export const classesColumns = () => [
  {
    name: "Title",
    cell: () => (
      <div className="flex items-start gap-6 p-6">
        <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded bg-brand/10"></div>
        <div>
          <h3 className="font-medium text-2xl">Master Design System in Figma</h3>
          <p className="mt-2 mb-3">Created at: <span>Apr 13, 2025 - 4:24 PM</span></p>

          <div>Published</div>
        </div>
      </div>
    ),
  },
  {
    name: "Duration",
    width: "12%",
    selector: (row) => row.duration,
  },
  {
    name: "Price",
    width: "12%",
    selector: (row) => row.price,
  },
  {
    name: "Duration",
    width: "12%",
    selector: (row) => row.duration,
  },
  {
    name: "Level",
    width: "12%",
    selector: (row) => row.level,
  }
]