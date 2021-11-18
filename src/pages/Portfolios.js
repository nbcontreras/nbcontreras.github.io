import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfoliosView from '../components/PortfoliosView';

function Portfolios() {
  const [portfolios, setPortfoios] = useState([]);
  const [information, setInformation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios
      .get('https://api.github.com/users/nbcontreras/repos')
      .then((response) => {
        if (mounted) {
          setPortfoios(response.data);
        }
      });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Portafolio - ${information.name}`}</title>
        <meta name="description" content={`Portafolio - ${information.name}`} />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portafolio" />
          {<PortfoliosView portfolios={currentPortfolios} />}
          {!(portfolios.length > portfoliosPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolios.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
