import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";


import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";



interface ContactMail {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}




export default function BasicTableOne({ tableData }: { tableData: ContactMail[] }) {
   const [expandedMessageId, setExpandedMessageId] = useState<string | null>(null); // 👈 state to track open message

  const toggleMessage = (id: string) => {
    setExpandedMessageId((prev) => (prev === id ? null : id));
};
const [data, setData] = useState<ContactMail[]>(tableData);
const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this message?");
  if (!confirmDelete) return;

  try {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
  method: "DELETE",
});


    if (!res.ok) {
      throw new Error("Failed to delete");
    }

    // Remove from UI
    setData((prev) => prev.filter((item) => item._id !== id));
  } catch (err) {
    console.error("Error deleting message:", err);
    alert("Failed to delete message.");
  }
};


  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">S.No.</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Name</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Email</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Phone</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Subject</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Message</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Created At</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Actions</TableCell>
            </TableRow>
          </TableHeader>
          {/* Table Body */}
           <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.length > 0 ? (
              data.map((mail, index) => (
                
                <React.Fragment key={mail._id}>
                  <TableRow>
                    <TableCell className="px-5 py-4 sm:px-6 text-theme-sm text-start dark:text-zinc-300">{index + 1}</TableCell>
                    <TableCell className="px-5 py-4 sm:px-6 text-theme-sm text-start dark:text-zinc-200">{mail.name}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{mail.email}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{mail.phone}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{mail.subject}</TableCell>

                    {/* 👇 Button to toggle message */}
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <button
                        onClick={() => toggleMessage(mail._id)}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {expandedMessageId === mail._id ? "Hide Message" : "View Message"}
                      </button>
                    </TableCell>

                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {new Date(mail.createdAt).toLocaleString()}
                    </TableCell>

                     <TableCell className="px-4 py-3 text-start">
                    <button
  onClick={() => handleDelete(mail._id)}
  className="text-red-600 hover:text-red-800 dark:text-red-400"
  aria-label="Delete message"
>
  <FiTrash2 size={18} />
</button>
</TableCell>
                  </TableRow>

                  {/* 👇 Conditional row for expanded message */}
                  {/* Message row */}
                  {expandedMessageId === mail._id && (
                    <tr>
                      <td colSpan={7} className="px-6 py-3 bg-gray-50 dark:bg-zinc-800 text-start text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line rounded-b-md">
                        <p>{mail.message}</p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell className="px-5 col-span-7 py-4 text-center text-gray-500 dark:text-gray-400">
                  No data available
                </TableCell>
              </TableRow>
            )}
           

          </TableBody>
        </Table>
      </div>
    </div>
  );
}