import React, { Component } from 'react'
import Menu from './Menu'
import PostList from './PostList'
import PostAdd from './PostAdd'

const Root = ({ match }) => (
	<div>
		<Menu />
		<PostList category = { match ? match.params.category : null } />
		<PostAdd />
	</div>
);

export default Root;
