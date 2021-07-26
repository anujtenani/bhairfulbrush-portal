import React, { useEffect, useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {UncontrolledTooltip } from 'reactstrap';
import {FiClipboard} from "react-icons/fi";
import {customAlphabet} from 'nanoid'
const nanoid = customAlphabet('abcdefghijklmnopqrstupvxyz', 6)
function CopyButton({value, className, style}) {
    const [elementId, setElementId] = useState(null); //to prevent different server side render and client side render IDs
    const [copied, setCopied] = useState(false)
    function onCopy(){
        setCopied(true);
        setTimeout(()=>{
            setCopied(false)
        },[3000])
    }
    useEffect(()=>{
        setElementId(nanoid())
    },[])
    if(!elementId){
        return null;
    }
    return (
        <>
        <CopyToClipboard text={value}
                         onCopy={onCopy}>

            <span id={elementId} className={elementId}>
                <FiClipboard style={style}  className={className}/>
            </span>
        </CopyToClipboard>
            <UncontrolledTooltip  placement="top" target={elementId}>{                 copied ? "Copied!" : "Click to copy"             }</UncontrolledTooltip>
            </>
    );
}


export default CopyButton;
