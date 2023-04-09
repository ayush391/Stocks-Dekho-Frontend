import { useData } from '../../hooks/useData';

const TopTrader = () => {
  const { data, isLoading, error } = useData(`/leader-board`);
  if (isLoading) {
    console.log(isLoading);
  } else {
    return (
      <div>
        <h2>Top-Performer</h2>
        <h5 style={{ color: 'red' }}>Become a member to unlock there profiles</h5>
        {data != null ? (
          data
            .sort((a, b) => a.portfolio_value < b.portfolio_value)
            .slice(0, 3)
            .map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <p
                style={{
                  color: 'green',
                  border: '1px solid',
                  borderRadius: '10px',
                  padding: '5px'
                }}>
                <b>#{index + 1}.</b> {Number(item.portfolio_value).toFixed(2)}
              </p>
            ))
        ) : (
          <></>
        )}
      </div>
    );
  }
};
export default TopTrader;
