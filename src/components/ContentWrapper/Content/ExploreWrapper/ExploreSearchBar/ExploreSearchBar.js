import React, { Component } from 'react'
import Select from 'react-select';
import { FixedSizeList as List } from "react-window";
import './ExploreSearchBar.css';

const height = 35;
class MenuList extends Component {
    render() {
        const { children, maxHeight } = this.props;
        return (
        <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={height} >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
        );
    }
}

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

export const single = ( props ) => (
    <div className='ExploreContent_Wrapper'>
        <div className='ExploreContent'>
            <h4>{props.contents[0].title}</h4>
            <span>{props.label.countryTitle}</span>
            <Select
                placeholder={props.label.country}
                className='CountrySelect'
                isClearable={true}
                isSearchable={true}
                value={props.countryValue}
                onChange={props.sendCountryValue}
                formatGroupLabel={formatGroupLabel}
                options={props.countryList}
                backspaceRemovesValue={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                    ...theme.colors,
                    primary25: '#EFEFEF',
                    primary: '#5B5D62',
                    },
                })} />
            <span>{props.label.agglosTitle}</span>
            <Select
                className='CountrySelect'
                placeholder= {props.label.agglos}
                isClearable={true}
                isSearchable={true}
                isDisabled={props.selectedCountry <= 50 ? false : true}
                value={props.agglosValue}
                components={{ MenuList }}
                onChange={props.sendAgglosValue}
                options={props.agglosList}
                backspaceRemovesValue={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    border: '1px',
                    colors: {
                    ...theme.colors,
                    primary25: '#EFEFEF',
                    primary: '#5B5D62',
                    },
                })} 
                />
        </div>
        {props.children}
    </div>
);

export const compare = ( props ) => {
    let list = props.countryList[1].options
    return (
        <div className='ExploreContent_Wrapper'>
            <div className='ExploreContent'>
                <h4>{props.contents[1].title}</h4>
                <span>{props.label.firstCountry}</span>
                <Select
                    className='CountrySelect'
                    placeholder= {props.label.compareFirst}
                    options={list}
                    value={props.firstDisplayValue}
                    backspaceRemovesValue={false}
                    onChange={props.sendFirstValue}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        border: '1px',
                        colors: {
                        ...theme.colors,
                        primary25: '#EFEFEF',
                        primary: '#5B5D62',
                        },
                    })} 
                     />
                <span>{props.label.secondCountry}</span>
                <Select
                    placeholder= {props.label.compareSecond}
                    value={props.secondDisplayValue}
                    options={list}
                    className='CountrySelect'
                    backspaceRemovesValue={false}
                    onChange={props.sendSecondValue}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        border: '1px',
                        colors: {
                        ...theme.colors,
                        primary25: '#EFEFEF',
                        primary: '#5B5D62',
                        },
                    })} 
                     />
                {props.children}
            </div>
        </div>
    )
};




