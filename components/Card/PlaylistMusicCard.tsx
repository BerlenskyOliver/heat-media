import Link from 'next/link'
import s from "./PlaylistMusicCard.module.css"
import Image from 'next/image'

interface Props {
    name: string,
    description?: string,
    image: string,
    link: string
}

function PlaylistMusicCard({name, description, image, link}: Props) {
    return (
        <div>
            <Link href={link}>
                <a>
                    <div className={`${s.card} my-2`}>
                        <div className={s.cardImage}>
                            <Image src={image} width={300} height={210} className="max-h-32" alt={name}/>
                        </div>
                        <div className={`${s.cardContent} font-semibold py-3 px-2`}>
                            <h3 className="text-white">{name}</h3>
                            <span className="text-white">{description}</span>
                        </div>
                        <span>
                            {/* <PlayCircleFilledWhiteIcon  className="playIcon " fontSize="large"/> */}
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default PlaylistMusicCard