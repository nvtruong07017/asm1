import profilePicture from '../assets/avatar.jpg';
import profileFacebook from '../assets/facebook.jpg';
import profileInstagram from '../assets/instagram.jpg';
// import smallProfilePicture from '../assets/b.jpg';

const ProfilePage = () => {
    return (
        <div className="bg-gradient-to-r">
            <div className="container w-[12000px] m-auto flex justify-center items-center h-screen">
                <div className="animate__animated animate__fadeIn animate__slower relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                        <img src={profilePicture} className="w-full rounded-[10px]" alt="profile-picture"/>
                    </div>
                    <div className="p-4 pt-6 pb-0">
                        <p className="block text-center font-sans text-3xl antialiased font-medium bg-clip-text">
                            Nguyễn Văn Trường
                        </p>
                        <p className="block pt-2 text-left font-sans text-2xl antialiased font-medium leading-relaxed bg-gradient-to-r bg-clip-text">
                            WEB DEVELOPER
                        </p>
                        <div className="block font-sans leading-relaxed">
                            <div>
                                <span className="font-bold">
                                    Date: 
                                </span>
                                  01-09-2003
                            </div>
                            <div>
                                <span className="font-bold">From:</span> Hà Nội
                            </div>
                            <div>
                                <span className="font-bold">Technologies:</span>
                                HTML, CSS,...
                            </div>
                            <div>
                                <span className="font-bold">Interest:</span>
                                Nấu ăn, ngủ,...
                            </div>
                            <div className='flex justify-center p-2 pt-4 pb-4 gap-7'> 
                                <div className='w-[50px] h-[50px] m-5'>
                                    <a href="https://www.facebook.com/nvtruong19"><img src={profileFacebook} alt="" /></a>
                                </div>
                                <div className='w-[50px] h-[50px] m-5'>
                                    <a href="https://www.instagram.com/__truogn.19/"><img src={profileInstagram} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;