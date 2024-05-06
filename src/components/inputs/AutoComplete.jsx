import React, { useEffect, useRef, useState } from "react"

function search(opts, v)  {
    const sv = v.trim().toLowerCase();
    return opts.filter(o => {
      const wrds = o.trim().toLowerCase().split(/\s+/);
        return wrds.some(w => w.startsWith(sv));
    });
  };

const AutoComplete = ({ options, value, onChange, label, placeholder, locked, required }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [cursor, setCursor] = useState(-1)
    const ref = useRef();

    const select = option => {
        onChange(option)
        setShowOptions(false)
    }

    const handleChange = text => {
        onChange(text);
        setCursor(-1);
        if (!showOptions) {
            setShowOptions(true)
        }
    }

    const filteredOptions = search(options, value);

    const moveCursorDown = () => {
        if (cursor < filteredOptions.length - 1) {
            setCursor(c => c + 1)
        }
    }

    const moveCursorUp = () => {
        if (cursor > 0) {
            setCursor(c => c - 1)
        }
    }

    const handleNav = (e) => {
        switch (e.key) {
            case "ArrowUp":
                moveCursorUp();
                break;
            case "ArrowDown":
                moveCursorDown();
                break;
            case "Enter":
                if (cursor >= 0 && cursor < filteredOptions.length) {
                    select(filteredOptions[cursor]);
                }
                break;
            default: break;
        }
    }

    useEffect(() => {
        const listener = e => {
            if (!ref.current.contains(e.target)) {
                setShowOptions(false)
                setCursor(-1)
            }
        };

        document.addEventListener('click', listener)
        document.addEventListener('focusin', listener)
        return () => {
            document.removeEventListener('click', listener);
            document.removeEventListener('focusin', listener);
        }
    }, []);

    return (<>
        <div className='mb-4' ref={ref} >
            <label className="block text-white text-sm font-bold mb-2" htmlFor={label.toLowerCase()}>
                {label}
            </label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 bg-main-400 border-main-600 placeholder-gray-400 text-white leading-tight focus:outline-none"
                value={value}
                autocomplete="one-time-code"
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                onChange={e => handleChange(e.target.value)}
                onFocus={() => setShowOptions(true)}
                onKeyDown={handleNav} placeholder={placeholder}
                disabled={locked ? locked : false}
                required={required ? required : false}
            />

            <ul className={`w-64 max-h-32 absolute rounded-lg shadow-lg ${!showOptions && 'hidden'} select-none overflow-y-auto`}>
                {filteredOptions.length > 0 && filteredOptions.sort().map((option, i, arr) => {
                    let className = "cursor-pointer py-2 px-4 text-white bg-card-300 hover:bg-card-200 "

                    /*if (i === 0)
                        className += "pt-2 pb-1 rounded-t-lg"
                    else if (i === arr.length)
                        className += "pt-1 pb-2 rounded-b-lg"
                    else if (i === 0 && arr.length === 1)
                        className += "py-2 rounded-lg"
                    else
                        className += "py-2"*/

                    if (cursor === i) {
                        className += " bg-gray-100"
                    }

                    return <li className={className}
                        key={option}
                        onClick={() => select(option)}
                    >{option}</li>
                })}

            </ul>
        </div>
    </>)
}

export default AutoComplete;
