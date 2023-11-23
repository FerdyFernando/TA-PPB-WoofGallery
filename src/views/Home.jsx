import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Load from '../components/Load';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import swal from 'sweetalert';
import Button from '../components/Button';

const Home = ({ listBreeds, setListBreeds }) => {
  const [page, setPage] = useState(1);
  const splitPage = 6;

  const max = Math.round(listBreeds.length / splitPage);

  const next = () => {
    if (page < max) {
      setPage(page + 1);
      window.scrollTo({ top: 0 });
    }
  };

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearch = (breed) => {
    if (!breed) {
      swal({
        text: 'the field is empty',
        icon: 'warning',
      });
    } else {
      const search = listBreeds.filter((element) =>
        element.toLowerCase().includes(breed)
      );
      setListBreeds(search);
    }
  };

  const handleOrganizeBreeds = () => {
    const organize = listBreeds.map((breed) => breed);
    setListBreeds(organize.reverse());
    swal({
      text: 'breeds dog reorganized successfully',
      icon: 'success',
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setPage(1);
  }, [listBreeds]);

  return (
    <section className='pt-10 px-3'>
      <div className='w-full flex flex-col items-center gap-4'>
        <div className='flex gap-3 flex-row'>
          <Search event={handleSearch} />
          <Button
            event={handleOrganizeBreeds}
            className={`hover:bg-[#34ba90] bg-[#44f2bb] w-28 lg:w-64`}
          >
            reorder alphabetically
          </Button>
        </div>
        <h1 className='text-white font-DynaPuff uppercase font-bold text-4xl lg:text-5xl'>
          dog breed list
        </h1>

        <div className='flex flex-col '>
          {!listBreeds.length ? (
            <Load />
          ) : (
            listBreeds
              .slice((page - 1) * splitPage, (page - 1) * splitPage + splitPage)
              .map((breed) => {
                return (
                  <Link
                    to={`/breeds-list/${breed}`}
                    key={breed}
                    id={breed}
                    className='text-[#46f8bf] hover:text-[#2b9876] transition ease-in duration-200 '
                  >
                    {
                      <Card
                        breed={breed}
                        amount={3}
                        className='h-[6.31rem] w-[6.31rem] md:h-[10rem] md:w-[10rem] lg:h-[20rem] lg:w-[20rem]'
                      />
                    }
                  </Link>
                );
              })
          )}
        </div>
        {listBreeds.length ? (
          <Pagination
            page={page}
            max={max}
            setPage={setPage}
            next={next}
            previous={previous}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default Home;
