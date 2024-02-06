import { MdContentCopy } from "react-icons/md";

const DemoAccount = ({ title, credentials }) => {
  return (
    <div className="">
      <h3 className="mb-1 text-[15px] font-semibold sm:text-base">{title}</h3>
      <table className="w-full text-sm sm:text-base">
        <tbody className="border">
          <tr>
            <td className="border p-2">Email</td>
            <td
              className="border p-2"
              style={{
                lineBreak: "anywhere",
              }}
            >
              {credentials[0]}
            </td>
            <td className="border">
              <button className="mx-auto flex w-8 items-center justify-center py-2.5 text-gray-500 duration-200 hover:text-[#1d1d1d]">
                <MdContentCopy className="text-base" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Password</td>
            <td className="border p-2">{credentials[1]}</td>
            <td className="border">
              <button className="mx-auto flex w-8 items-center justify-center py-2.5 text-gray-500 duration-200 hover:text-[#1d1d1d]">
                <MdContentCopy className="text-base" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DemoAccount;
