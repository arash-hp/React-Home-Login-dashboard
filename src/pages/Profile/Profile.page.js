import React, { Component } from 'react';
// import ReactPaginate from 'react-paginate';
// import Pagination from 'react-js-pagination';
import { Helmet } from "react-helmet";
import { Navbar } from './Navbar/Navbar';
import { Header } from './Header/Header';
import { CourseList } from './CourseList/CourseList';
import { Pagination } from './Pagination/Pagination';
import styles from './Profile.module.scss';
// import App from './Pagination/Pagination';
// import styles from './Profile.module.scss'

import axios from 'axios';

class ProfilePage extends Component {

    state = {
        courses: [],
        loading: false,
        categories: [],
        page: 0,

    }

    componentDidMount = () => {
        this.initData()
    }

    onSearch = (query) => {
        this.setState({ query: query, page: 0 })
        console.log(query)
    }

    onPageChange = (page) => {
        this.setState({ page })

    }

    initData = () => {
        this.getData().then((courses) => {
            const categories = this.getCategory(courses)
            this.setState({ courses, categories })
        })
    }

    getCategory = (items) => {
        const categories = items.map((item) => item.category)
        const uniq = [...new Set(categories)]
        return uniq
    }

    getData = (filter = '') => {
        this.setState({ loading: true });
        return axios.get(`https://61ebc7117ec58900177cdd6d.mockapi.io/courses?filter=${filter}`).then((res) => {
            return res.data;
        }).catch((reason) => {
            console.error(reason)
        }).finally(() => {
            this.setState({ loading: false })
        })
    }

    handleCategorySelect = (selectedCategory) => {
        this.setState({ selectedCategory, page: 0 })
    }

    get query() {
        const limit = 5
        const { courses, selectedCategory, query, page } = this.state;
        let result = courses;
        if (selectedCategory) {
            result = result.filter((course) => course.category === selectedCategory)
        }
        if (query) {
            result = result.filter((course) => course.title.includes(query))
        }
        return {
            items:
                result.slice(page * limit, (page + 1) * limit),
            pageCount:
                Math.ceil(result.length / limit)
        }

        //   return !selectedCategory ? courses : courses.filter((course) => course.category === selectedCategory)
    }

    render() {
        const { loading, categories, selectedCategory, page } = this.state
        const { items, pageCount} = this.query
        console.log(page)
        // const filteredCourses = !selectedCategory ? courses : courses.filter((course) => course.category === selectedCategory);
        return (
            <>
                <Helmet>
                    <title>
                        Page | profile
                    </title>
                </Helmet>
                <div className={styles.root}>
                    <Navbar onSearch={this.onSearch} />
                    <Header items={categories} onSelect={this.handleCategorySelect} activeItem={selectedCategory} />
                    {loading && <div className={styles.loading} ></div>}
                    <CourseList items={items} />
                    <Pagination onChange={this.onPageChange} page={page} pageCount={pageCount} />
                </div>
            </>
        );
    }
}

export { ProfilePage };