<template>
	<ul>
		<!--<li v-for="sigle_order in order_list">
			<a>{{ single_order.title }}</a>
		</li>-->
		<li>{msg}</li>
	</ul>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default{
		data: function(){
			return {
//				order_list: [
//					{ id: '01', title: 'order 01'},
//					{ id: '02', title: 'order 02'},
//					{ id: '03', title: 'order 03'}
//				]
				msg:"tttttt"
			}
		}
	}
	
</script>