import Image from "next/image";
import React from "react";
import { IMediaItem } from "../Types/types";

type Props = IMediaItem;

const MediaItem: React.FC<Props> = React.memo(({ title, images, bulletPoints, description }: Props) => {
	return (
		<div
			className={`flex relative mx-3 my-5 flex-row bg-white items-start p-0 gap-10 rounded-media-item w-media-item 
                h-media-item overflow-hidden hover:drop-shadow-md transition-all duration-200 ease-in-out hover:-translate-y-2`}
		>
			{images.length > 1 ? (
				<div className='flex flex-col overflow-hidden'>
					{images.map((img) => (
						<Image
							src={`${img}`}
							width={"183.5px"}
							height={"170px"}
							alt='img'
							className='w-single-img hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'
						/>
					))}
				</div>
			) : (
				<Image
					src={images[0]}
					alt='img'
					width={"183.5px"}
					height={"336px"}
					className='h-media-item w-single-img hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'
				/>
			)}
			<div className='flex flex-col items-start left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 absolute h-full '>
				<span className='my-5 mr-5 font-bold text-2xl text-ma-charcoal'>{title}</span>
				{bulletPoints &&
					bulletPoints.map((point) => (
						<div className='flex flex-row custom-font relative self-start items-center justify-center'>
							<div className='flex p-1 rounded-full bg-ma-tan' />
							<span className='ml-2 font-semibold '>{point}</span>
						</div>
					))}
				<span className={`${bulletPoints ? "mt-5" : "mt-0"} mr-5 text-ma-charcoal text-base custom-font`}>
					{description}
				</span>
			</div>
		</div>
	);
});

export default MediaItem;
