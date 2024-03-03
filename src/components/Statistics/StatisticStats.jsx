import './Statistics.css'
import PropTypes from 'prop-types';

const StatisticsStats = ({ title, stats}) => {   
    return (
        <div>
            <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
            {stats.map(({id, label, percentage}) => {
                return <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
            })}
            </ul>
            </section>
        </div>
    );
};

StatisticsStats.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )};

export default StatisticsStats;