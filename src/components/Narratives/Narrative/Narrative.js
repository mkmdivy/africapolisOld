import React from 'react';
import Image from '../../RenderImage/RenderImage';
import Highlighter from 'react-highlight-words';
import './Narrative.css';

export const stories = ( props ) => {
    let texts = props.contents.text;
    return (
        <div className='NarrativeWrapper Narratives'>
            <ul>
                <li><h2> {props.contents.title}</h2><hr id='Narrative_HR'/></li>
                {renderText(texts, props.words)}
            </ul>
        </div>
    );
};

const renderText = (texts, words) => (
    texts.map((content, i) => (
        <li key={i}>
            <h5 key={i}> {content.storytitle} </h5>
            {content.storyText.map((text, key) => (
                <Highlighter
                    key={key}
                    autoEscape={true}
                    textToHighlight={text.text}
                    searchWords={words}
                />
            ))}
        </li>
    ))
);

export const landingpage = ( props ) => {
    return (
        <div className='NarrativeWrapper LandingPage'>
            <div className='LandingPage_Text'>
                <h2> {props.contents.text[0].storytitle}</h2>
                <hr id='Narrative_HR'/>
                <p>{props.contents.text[0].storyText}</p>
            </div>
            <div className='LandingPage_Text'>
                <h2> {props.contents.text[1].storytitle}</h2>
                <hr id='Narrative_HR'/>
                <p>{props.contents.text[1].storyText}</p>
            </div>
        </div>
    )
}

export const research = ( props ) => {
    return (
        <div className='ResearchWrapper'>
            <h2> {props.contents.title}</h2>
            <hr id='Narrative_HR'/>
            <p>{props.contents.text}</p>
            <div className='TreemapWrapper'>
                {props.children}
            </div>
        </div>
    )
};

export const urbanAgglos = ( props ) => {
    let text = props.contents.text.map(t => t.text);
    return (
        <div className="ResearchWrapper">
            <div className='ResearchWrapper_Content'>
                <h2>{props.contents.title}</h2>
                <hr id='Narrative_HR'/>
                <p>{text[0]}</p><br/>
                <p>{text[1]}</p><br/>
                <p>{text[2]}</p><br/>
                <span>{text[3]}</span><br/><br/>
                <Image width={100} select={1} alt={'Lake Victoria'} />
                <span>{text[4]}</span><br/><br/>
                <Image width={100} select={2} alt={'Lake Victoria'} />
                <span>{text[5]}</span><br/><br/>
                <span>{text[7]}</span><br/>
                <p>{text[6]}</p><br/>
                <span>{text[8]}</span><br/>
            </div>
        </div>
    )
};

export const crossBorder = ( props ) => {
    let text = props.contents.text.map(t => t.text);
    return (
        <div className='ResearchWrapper'>
            <div className='ResearchWrapper_Content'>
                <h2>{props.contents.title}</h2>
                <hr id='Narrative_HR'/>
                <p>{text[0]}</p><br/>
                <p>{text[1]}</p><br/>
                <p>{text[2]}</p><br/>
                <p>{text[3]}</p><br/>
                <p>{text[4]}</p><br/>
                <p>{text[5]}</p><br/>
                <p>{text[6]}</p><br/>
                <Image width={100} select={3} alt={'Legend'}/>
            </div>
        </div>
    )
};

export const distMetro = ( props ) => {
    let text = props.contents.text.map(t => t.text);
    return (
        <div className='ResearchWrapper'>
            <div className='ResearchWrapper_Content'>
                <h2>{props.contents.title}</h2>
                <hr id='Narrative_HR'/>
                <p>{text[0]}</p><br/>
                <p>{text[1]}</p><br/>
                <p>{text[2]}</p><br/>
                <p>{text[3]}</p><br/>
                <p>{text[4]}</p><br/>
            </div>
        </div>
    )
};
