export default function Input(props) {
    return (
        <div className={props.className}>
            <label>{props.subtitle}</label>
            <div className="input">
                <input className='inner-input' type={props.type} placeholder={props.placeholder} />
                <div id={props.id}><img src={props.src} alt={props.alt} /></div>
            </div>
        </div>
    )
}