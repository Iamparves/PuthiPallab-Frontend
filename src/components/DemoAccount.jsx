import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";

const DemoAccount = ({ title, credentials }) => {
  const copyCredential = (credential, type) => {
    navigator.clipboard.writeText(credential);

    toast.success(`${type} copied to clipboard!`);
  };
  return (
    <div>
      <h3 className="mb-1 text-[15px] font-semibold sm:text-base">{title}</h3>
      <table className="w-full text-sm sm:text-base">
        <tbody className="border">
          <tr>
            <td className="border p-2 text-[#777]">Email</td>
            <td
              className="border p-2"
              style={{
                lineBreak: "anywhere",
              }}
            >
              {credentials[0]}
            </td>
            <td className="border">
              <button
                onClick={() => copyCredential(credentials[0], "Email")}
                className="mx-auto flex w-8 items-center justify-center py-2.5 text-gray-500 duration-200 hover:text-[#1d1d1d]"
              >
                <MdContentCopy className="text-base" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2 text-[#777]">Password</td>
            <td className="border p-2">{credentials[1]}</td>
            <td className="border">
              <button
                onClick={() => copyCredential(credentials[1], "Password")}
                className="mx-auto flex w-8 items-center justify-center py-2.5 text-gray-500 duration-200 hover:text-[#1d1d1d]"
              >
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
