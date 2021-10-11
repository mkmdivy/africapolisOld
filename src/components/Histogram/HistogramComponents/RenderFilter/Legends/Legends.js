import React from 'react';
import './Legends.css';
import createClass from 'create-react-class';

const renderLegends = ( props ) => {
    let legend = props.legend;
    let data = props.agglosArray;
    let legendConfig = props.legendConfig;
    let renderCircle = [];
    let result = {};
    let Circle = createClass({
        render:function() {
            var circleStyle = {
                // opacity:0.2,
                padding:4,
                margin:0,
                display:"inline-block",
                backgroundColor: this.props.bgColor,
                backgroundOpacity:0.2,
                borderRadius: "50%",
                border: '1px solid',
                borderColor: this.props.bgColor,
                width:this.props.size,
                height:this.props.size,
            };
            return (
                <div className='CircleWrapper'>
                    <div style={circleStyle} className='Circle' />
                    <span>{this.props.text}</span>
                </div>
            );
        }
    });

    legendConfig.forEach((d,i) => (
        renderCircle.push(
            <Circle key={i + d} bgColor={d.color} size={d.size} text={d.text} />
        )
    ));

    if(data){
        for(let i = 0; i < data.length; ++i) {
            if(!result[data[i]])
            result[data[i]] = 0;
            result[data[i]]++;
        }
        for(let i = 0; i < 7; ++i){
            if(!result[i]){result[i]=0}
        }
        result[["7"]]=result[["1"]]+result[["2"]]+result[["3"]]+result[["4"]]+result[["5"]]+result[["6"]];
    }
    let wrapper = (
        <table className='LegendTable'>
            <tbody>
                <tr className='LegendTR'>
                    {renderCircle.map((circle, i) => (
                        <td key={i}>{circle}</td>
                    ))}
                </tr>
                <tr className='LegendTR'>
                    <td>{result['6']}</td>
                    <td>{result['5']}</td>
                    <td>{result['4']}</td>
                    <td>{result['3']}</td>
                    <td>{result['2']}</td>
                    <td>{result['1']}</td>
                </tr>
            </tbody>
        </table>
    )
    return (
        <div className='LegendWrapper'>
            <h6>{legend.title}</h6>
            <span>{legend.totalAgglos}: {result['7']}</span>
            {wrapper}
        </div>
    )
};
export default renderLegends;