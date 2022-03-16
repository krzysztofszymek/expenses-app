import './ChartBar.scss'

function ChartBar(props) {
    let barFillPercent = '0%';

    if(props.maxValue > 0){
        barFillPercent = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className="inner">
                <div className="fill" style={{height: barFillPercent}}>
                    
                </div>
            </div>
            <div className="label">
                {props.label}
            </div>
        </div>
    );
}

export default ChartBar;