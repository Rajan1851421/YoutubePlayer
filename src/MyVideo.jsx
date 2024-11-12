import React, { useEffect, useState } from 'react';
import MediaPlayer from './MediaPlayer';
import { FaPlay } from "react-icons/fa6";


function MyVideo() {
    const [data, setData] = useState('');
    const [video, setVideo] = useState([]);
    const [url, setUrl] = useState(" https://www.youtube.com/watch?v=4hEDKrIM724")


    const handleUpload = () => {
        const existingData = localStorage.getItem("yt_video");

        // Add new video to localStorage
        if (existingData) {
            const parsedData = JSON.parse(existingData);
            parsedData.push(data);
            localStorage.setItem("yt_video", JSON.stringify(parsedData));
        } else {
            localStorage.setItem("yt_video", JSON.stringify([data]));
            alert("Uploaded")
            setData("")
        }
        console.log(data);
        setData('');
    }

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem("yt_video"));
        if (existingData) {
            setVideo(existingData);
        }
    }, [data]);

    const HandlePaly = (url) => {
        console.log("Video:", url)
        setUrl(url)
    }

    return (
        <div className="h-screen bg-[#D6D3D1] flex">
            <div className="w-[25%] border h-full fixed top-[60] left-0 flex flex-col justify-start items-start p-4">
                <label htmlFor="ytVideo" className='text-start'>Youtube URL:</label>
                <input
                    type="text"
                    id="ytVideo"
                    className="mb-4 px-2 py-2 w-full rounded-md"
                    placeholder='Youtube url paste here..'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button onClick={handleUpload} className='px-2 py-1 my-2 bg-green-400 rounded-md'>Upload</button>
                <div className='border w-full border-white rounded-md'></div>

                {/* Video List */}
                <div className=' w-full p-2  mt-2'>
                    <p>Videos</p>
                    <div className=' w-full '>
                        {
                            video && video.map((ele, index) => (
                                <div key={index} className='p-2'>
                                    <div className='flex justify-between items-center border p-2 rounded-md '>
                                        <div>{index + 1}</div>
                                        <div className="mr-4 ">
                                            {/* Static image for the video thumbnail */}
                                            <img
                                                src="https://img.freepik.com/free-psd/banner-acquire-followers-with-youtube-icon-transparent-background_125540-2958.jpg?uid=R131980866&ga=GA1.1.1476146066.1729933903&semt=ais_hybrid"
                                                alt="Video Thumbnail"
                                                className="w-16 h-10 object-cover"
                                            />
                                        </div>
                                        <div>
                                            <FaPlay size={26} onClick={() => HandlePaly(ele)} />
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="ml-[25%] w-[75%] h-full border p-4">
                <MediaPlayer videoUrl={url} />
            </div>
        </div>
    );
}

export default MyVideo;
