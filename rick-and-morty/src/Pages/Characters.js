import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Card from '../Components/Card';

export default function Characters() {
    const [character, setCharacter] = useState([]);
    let { info, results } = character;
    const [searchText, setSearchText] = useState("");
    const [pageNumber, updatePageNumber] = useState(1);

    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}`;

    const pageChange = (data) => {
        updatePageNumber(data.selected + 1);
    };

    const fetchCharacters = async (api) => {
        await axios.get(`${api}`)
            .then(res => {
                setCharacter(res.data)
            })
            .catch(() => { setCharacter(0) }
            )
    };
    useEffect(() => {
        fetchCharacters(api);

    }, [api])

    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <section className='d-flex justify-content-center'>
                        <div className='input-group w-75 my-4'>
                            <input
                                className='form-control search-input shadow-lg'
                                type="text"
                                placeholder="Search..."
                                value={searchText}
                                onChange={(e) => {
                                    updatePageNumber(1);
                                    setSearchText(e.target.value);
                                }}
                            />
                        </div>
                    </section>
                    <section className='d-flex justify-content-center flex-wrap'>
                        <Card results={results} />
                    </section>

                    <ReactPaginate
                        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                        pageCount={parseInt(info?.pages)}
                        onPageChange={pageChange}
                        className="pagination justify-content-center my-4 gap-4"
                        nextLabel="Next"
                        previousLabel="Prev"
                        previousClassName="btn btn-light fs-5 prev"
                        nextClassName="btn btn-light fs-5 next"
                        activeClassName="active"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                    />
                </div>
            </div>
        </>
    )
}