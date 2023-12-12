export function MyButton({ onClick }) {
    return (
        <button class='on' onClick={onClick} aria-label="Send Christmas Prayer">
            "ส่งคำอธิฐาน" Get Christmas snowdrop
        </button>
    );
}

export function EndSnowButton({ onClick }) {
    return (
        <button className="off" onClick={onClick} aria-label="End Christmas Snowdrop">
            "จบการทำงาน" End Christmas snowdrop
        </button>
    );
}
