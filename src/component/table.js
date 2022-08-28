import { useContext, useEffect, useState } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import { useTable, useGlobalFilter, useSortBy, usePagination, useAsyncDebounce } from 'react-table'
import { StateContext } from '../context/statecontext'
import './table.css'

const Table = () => {
    const { globalColumnsTables, globalDataTables } = useContext(StateContext)

    const tablesData = useTable({
        data: globalDataTables,
        columns: globalColumnsTables,
    }, useGlobalFilter, useSortBy, usePagination)

    const SearchData = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
        const count = preGlobalFilteredRows.length;
        const [value, setValue] = useState(globalFilter)

        const onChange = useAsyncDebounce((value) => {
            setGlobalFilter(value || undefined);
        }, 200);

        return (
            <>
                <div style={{
                    zIndex: 99,
                    color: 'white',
                    width: '100%',
                    textAlign: 'left'

                }}>
                    <input
                        type="text"
                        className=""
                        value={value || ""}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        placeholder={`find your records...`}
                    />
                </div>
            </>
        );
    };

    return (
        <Container>
            <br />
            <div
                className='container'>
                <SearchData
                    preGlobalFilteredRows={tablesData.preGlobalFilteredRows}
                    globalFilter={tablesData.state.globalFilter}
                    setGlobalFilter={tablesData.setGlobalFilter}
                /><br />
                <table {...tablesData.getTableProps()}>
                    <thead style={{
                        color: 'white'
                    }}>
                        {tablesData.headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-white  uppercase tracking-wider"
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        <div >
                                            {column.render("Header")}
                                            {column.isSorted ? column.isSortedDesc ? " ▼" : " ▲" : ""}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...tablesData.getTableBodyProps()}>
                        {/* {tablesData.rows.map((row, i) => { */}
                        {tablesData.page.map((row, i) => {
                            tablesData.prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />
                <Pagination>
                    <Pagination.First onClick={() => tablesData.gotoPage(0)}>{'<<'}</Pagination.First >
                    <Pagination.Item onClick={() => tablesData.previousPage()}>{'<'}</Pagination.Item>
                    <Pagination.Item onClick={() => tablesData.nextPage()}>{'>'}</Pagination.Item>
                    <Pagination.Last onClick={() => tablesData.gotoPage(tablesData.pageCount - 1)}>{'>>'}</Pagination.Last >
                </Pagination>
                <br /><br /><br />
            </div>
        </Container >
    )
}

export { Table }
