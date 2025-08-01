import GridShape from "../components/common/GridShape";


export default function Home() {
  return (
    <>
      <GridShape />
       <div className="h-[70vh] w-full flex justify-center items-center">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <img
            src="/logo1.png"
            alt="UmbrellaDesk Logo"
            className="mx-auto mb-2 h-24"
          />
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            WELCOME TO UMBRELLADESK
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            UmbrellaDesk is your all-in-one admin panel for managing vendors, tracking sales, and monitoring analytics. Easily navigate through intuitive dashboards, manage user accounts, and gain insights to help your business grow.
          </p>
          </div>
      </div>
    </>
  );
}
