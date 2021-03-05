interface Props{
    className?: string,
    onClick?: () => void
}

export const PlayIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
            <path d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z"></path>
            <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
        </svg>
    )
}

export const VideoLibraryIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
            </svg>
    )
}

export const PlaylistAddIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></svg>
    )
}

export const MenuIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

export const AddIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
    )
}

export const DeleteIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
    )
}

export const PlaylistPlayIcon = ({className, onClick}: Props) => {
    return (
        <svg width="24" height="24" className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z"></path></svg>
    )
}

export const BellIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
    )
}

export const CloseIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    )
}

export const LibraryMusicIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5a2.5 2.5 0 01-5 0 2.5 2.5 0 012.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></svg>
    )
}

export const LibraryVideoIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></svg>
    )
}

export const MoreVertIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}  width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    )
}

export const VideoFilesIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.5 2.375A2.562 2.562 0 015.861 2h20.366a2.545 2.545 0 012.423 1.951 3.37 3.37 0 01.072.862v11.176h-1.573a1.814 1.814 0 00-.22.022 5.236 5.236 0 00-.581-.011c-.3.007-.61-.014-.914.014a2.275 2.275 0 00-.4-.02h-4.739c-.2 0-.392.008-.587-.01l.1-.065-6.353-3.813v3.889c-2.213-.005-4.427 0-6.64 0a2.274 2.274 0 00-.251.021c-.212-.032-.427-.016-.642-.016-.284.006-.57-.015-.853.015a2.052 2.052 0 00-.253-.022H3.275c.006-3.635 0-7.27 0-10.9a4.786 4.786 0 01.071-1.131A2.541 2.541 0 014.5 2.375zm.54 2.188a.639.639 0 00-.489.606v1.316a.639.639 0 00.627.6h1.309a.638.638 0 00.6-.608c.005-.426 0-.853 0-1.279a.644.644 0 00-.329-.575.708.708 0 00-.358-.078H5.264a1.081 1.081 0 00-.224.018zm20.341 0a.639.639 0 00-.474.607v1.306a.638.638 0 00.6.608c.436.005.872 0 1.308 0a.639.639 0 00.627-.606c.006-.438 0-.876 0-1.314a.638.638 0 00-.594-.621c-.348-.009-.7 0-1.045 0a1.98 1.98 0 00-.422.024zM5.042 8.38a.637.637 0 00-.452.4 1.078 1.078 0 00-.041.386v1.135a.637.637 0 00.6.6c.4.008.795 0 1.192 0a.826.826 0 00.395-.065.641.641 0 00.36-.574V8.983a.638.638 0 00-.6-.624c-.338-.008-.677 0-1.016 0a2.385 2.385 0 00-.438.021zm20.338 0a.637.637 0 00-.433.4 1.072 1.072 0 00-.041.387v1.131a.638.638 0 00.608.607c.406.006.812 0 1.218 0a.739.739 0 00.38-.078.64.64 0 00.335-.558V8.985a.637.637 0 00-.593-.622c-.349-.009-.7 0-1.047 0a1.928 1.928 0 00-.428.022zM5.041 12.2a.639.639 0 00-.491.608c0 .438-.005.877 0 1.315a.638.638 0 00.627.6h1.3a.638.638 0 00.608-.607v-1.307a.638.638 0 00-.605-.626c-.348-.007-.7 0-1.045 0a2.12 2.12 0 00-.394.017zm20.335.006a.635.635 0 00-.43.394 1.06 1.06 0 00-.041.386v1.131a.638.638 0 00.607.608c.435.005.87 0 1.306 0a.639.639 0 00.628-.605c.006-.438 0-.876 0-1.313a.637.637 0 00-.592-.622c-.349-.01-.7 0-1.046 0a1.908 1.908 0 00-.431.015z" fill="#e75749"></path><path d="M13.458 12.1q3.176 1.908 6.353 3.813l-.1.065q-3.127 1.872-6.251 3.748V15.99c-.001-1.295-.004-2.59-.002-3.89z" fill="#fff"></path><path d="M3.275 15.988h1.541a2.052 2.052 0 01.253.022.645.645 0 00-.409.273.883.883 0 00-.111.518v1.045a.686.686 0 00.685.689h1.192a.68.68 0 00.657-.569c.008-.447 0-.9 0-1.343a.632.632 0 00-.521-.613 2.274 2.274 0 01.251-.021h6.64v3.736q3.127-1.871 6.251-3.748c.2.018.391.007.587.01h4.741a2.275 2.275 0 01.4.02.637.637 0 00-.475.385.983.983 0 00-.045.407v1.014a.677.677 0 00.691.719h1.16a.684.684 0 00.686-.658v-.984a1.074 1.074 0 00-.1-.589.642.642 0 00-.42-.292 1.814 1.814 0 01.22-.022h1.573c.011 1.721 0 3.443 0 5.165v6.293a2.567 2.567 0 01-.612 1.651 2.539 2.539 0 01-1.563.868 7.534 7.534 0 01-.981.033H6.724a9.27 9.27 0 01-1.368-.048 2.557 2.557 0 01-2-1.846 2.825 2.825 0 01-.09-.746V16.891c.007-.3-.002-.602.009-.903zm1.795 3.843a.613.613 0 00-.386.234.761.761 0 00-.134.464v1.162a.685.685 0 00.686.658h1.283a.687.687 0 00.568-.716v-1.191a.617.617 0 00-.2-.458.712.712 0 00-.487-.17H5.264a1.039 1.039 0 00-.194.017zm20.366 0a.62.62 0 00-.522.58v1.222a.676.676 0 00.69.718c.428 0 .857.005 1.285 0a.7.7 0 00.562-.684v-1.013a.9.9 0 00-.123-.568.661.661 0 00-.532-.267h-.954a2.246 2.246 0 00-.406.011zM5.071 23.648a.609.609 0 00-.4.249.766.766 0 00-.124.448v1.132a.7.7 0 00.6.688h1.376a.687.687 0 00.567-.717v-1.189a.617.617 0 00-.2-.459.71.71 0 00-.484-.17H5.265a1.028 1.028 0 00-.194.018zm20.362 0a.616.616 0 00-.492.427.99.99 0 00-.029.33V25.6a.681.681 0 00.656.567h1.193a.689.689 0 00.686-.719v-1.164a.657.657 0 00-.286-.545 1.461 1.461 0 00-.787-.11c-.312.01-.629-.02-.94.018z" fill="#c0392b"></path></svg>
    )
}

export const MusicIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick} width="24" height="24" role="img" viewBox="0 0 24 24" fill="currentColor" color="#000" xmlns="http://www.w3.org/2000/svg"><title>Apple Music icon</title><path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536-.142-.773.227-1.624 1.038-2.022.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516.014-.063.02-.13.02-.193 0-1.815 0-3.63-.002-5.443 0-.062-.01-.125-.026-.185-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.326.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.443-.088.664-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"></path></svg>
    )
}

export const BarsLoader = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}  width="24" height="24" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#000"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect></svg>
    )
}

export const AudioLoader = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#000"><g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g></svg>
    )
}

export const QueueMusicIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></svg>
    )
}

export const MoreHorizIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    )
}

export const YoutubeIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><title>YouTube icon</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path></svg>
    )
}

export const Spinner = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24"  viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#000"><g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd"><circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg>
    )
}

export const SearchIcon = ({className, onClick}: Props) => {
    return(
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#fff"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
    )
}

export const CheckIcon = ({className, onClick}: Props) => {
    return (
        <svg className={`inline-block ${className ? className : ""}`} onClick={onClick}
        width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path fillRule="evenodd" d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"></path></svg>
    )
}