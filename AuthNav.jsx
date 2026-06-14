const AuthNav = () => {
    return (
        <div className="flex p-[20px] border-b-[1px] justify-around border-solid border-b-gray-200 h-[70px]">
            <h2 className="flex items-center pl-[20px] text-[50px] font-bold">DP</h2>
            <div className="ml-auto pr-[20px]">
                <a href="/" className="bg-gray-200 font-semibold text-black decoration-none hover:text-white hover:font-bold text-[18px] rounded-[5px] p-[10px]">Home</a>
            </div>
        </div>
      );
}
 
export default AuthNav;