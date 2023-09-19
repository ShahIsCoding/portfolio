import TerminalIcon from '@mui/icons-material/Terminal';
export const Terminal = ({handleClose}) =>{
    const terminaltext = (command) => {
        return <>
            <span className='h6'>
                    <span className='text-success'>@shahbash</span>:
                    <span className='text-primary'>~</span></span>
                    <span>$</span>
            <span className="typing px-1" >{command}</span><br/>
        </>
    }
    return(
        <div className="terminal">
            <div className="terminal-header d-flex justify-content-between">
                <span className='d-flex align-items-center'><TerminalIcon /> shahbash</span>
                <span className='terminal-header--close px-3 py-1' onClick={handleClose}>X</span>
            </div>
            <div className="terminal-body ubuntu p-1">
                {terminaltext("clear")}
                {terminaltext("load profile_abhishekshah")}
            </div>
        </div>
    )
}