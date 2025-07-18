import { info } from '../data/Contact';

export default function Contact() {

    return (
        <main className="min-w-[300px] max-w-[700px] lg:w-[700px] h-full">
            <div className="flex flex-row gap-[50px] h-full">
                {/* Borde  */}
                <div className="w-[1px] bg-[#CCCCCC]" />

                {/* Contenido */}
                <div className="flex flex-col gap-[50px] w-full h-full">
                    <div className="flex gap-[50px] w-full h-full items-end">
                        <a href='https://www.linkedin.com/in/anthony-adasme-correa/' target="_blank" rel="noopener noreferrer"
                            className='link'>{info[1]}</a>
                        <a href={info.Github} target="_blank" rel="noopener noreferrer"
                            className='link'>{info[2]}</a>
                        <a href={info.CV} target="_blank" rel="noopener noreferrer"
                            className='link'>{info[3]}</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
