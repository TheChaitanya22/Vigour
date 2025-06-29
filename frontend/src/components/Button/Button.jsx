import './Button.css'


export function Button ({label, onPress}) {
    return <div>
        <button onClick={onPress} type="button" class="button">
        {label}
        </button>
    </div>
}