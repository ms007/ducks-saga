import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { heroSelectors, heroActions } from 'state/hero';

const Hero = ({ hero, fetchHero }) => {
  const fetch = () => fetchHero();
  return (
    <div>
      <button onClick={fetch}>Fetch</button>
    </div>
  );
};

Hero.propTypes = {
  hero: PropTypes.object
};

const mapStateToProps = state => ({
  hero: heroSelectors.getHero(state)
});

const mapDispatchToProps = dispatch => ({
  fetchHero: () => dispatch(heroActions.fetchHero())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
