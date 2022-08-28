import type { NextPage } from "next";
import Head from "next/head";
import MediaItem from "../src/Components/MediaItem";
import { DummyData } from "../src/Constants/DummyData";

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Head>
				<title>Sefa İlyas Öz</title>
			</Head>
			<span className='mt-10 text-5xl text-ma-darkBlue w-[710px] mx-auto text-center font-bold mb-10'>
				We make creative media that <span className='text-ma-blue3'>adds value</span>
			</span>
			<div className='flex h-screen flex-row items-center justify-center flex-wrap mb-16'>
				{DummyData.map((item, index) => (
					<MediaItem
						title={item.title}
						description={item.description}
						images={item.images}
						key={index}
						bulletPoints={item.bulletPoints}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
