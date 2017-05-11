<template>
	<div>
		<h1>bar</h1>
		<p>{{msg}}</p>
	</div>
	<div>
		<ul class="nav nav-tabs">
			<li :class="currentPath == 'order_manager' ? 'active' : ''">
				<a v-link="{ path: 'order_manager'}" :class="ttt">订单管理</a>
			</li>
			<!--<li :class="currentPath == 'order_list' ? 'active' : ''">
				<a v-link="{ path: 'order_list'}">订单列表</a>
			</li>-->
		</ul>
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msg: '这是CS系统 巴士业务模块!',
				currentPath: ''
			}
		},
		route: {
			data: function(transition){
				this.currentPath = transition.to.path
				transition.next()
			}
		}
	}
</script>

<style type="text/css">
	.ttt{
		color:#red;
	}
</style>