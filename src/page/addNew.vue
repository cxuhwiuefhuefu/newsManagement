<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="12" :offset="4">
		        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="标题" prop="tit">
						<el-input v-model="formData.tit" placeholder="请输入标题"></el-input>
					</el-form-item>
					<el-form-item label="作者" prop="name" >
						<el-input v-model="formData.name" placeholder="请输入作者"></el-input>
					</el-form-item>
					<el-form-item label="时间" prop="time">
						<el-date-picker
						v-model="formData.time"
						type="date"
						placeholder="选择日期时间">
						</el-date-picker>   
					</el-form-item>

					<el-form-item label="类型" prop="type">
						<el-select v-model="formData.listType" placeholder="请选择类型" @change="changeListType">
							<el-option
								v-for="item in listTypeArr"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="formData.type" placeholder="请选择类型">
							<el-option
								v-for="item in typeArr"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="封面" prop="pic">
						<el-radio v-model="radio" label="1">外链</el-radio>
  						<el-radio v-model="radio" label="2">自主填写</el-radio>

						<el-input v-model="formData.pic"></el-input>
						<!-- <input type="file" name="" id=""> -->
					</el-form-item>

					<el-form-item label="内容" prop="tit">
						<el-radio class="contentUrl outContent" v-model="radio2" label="1">外链</el-radio>
  						<el-radio class="contentUrl inContent" v-model="radio2" label="2">自主填写</el-radio>
			
						<el-input v-model="formData.link"></el-input>
						 <script id="container" name="content" type="text/plain">
							这里写你的初始化内容
						</script>
					</el-form-item>
				
					<el-form-item class="button_submit">
						<el-button type="primary" @click="submitForm('formData')">保存</el-button>
					</el-form-item>
				</el-form>
			</el-col>
  		</el-row>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import {cityGuess, addShop, searchplace, foodCategory} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'

	
	export default {
    	data(){
    		return {
				// 提交的数据
    			formData: {
					tit: '', // 标题
					name: '', // 作者
					time: '', // 时间
					listType: '', // 大类
					type: '', // 小类
					outPic: '', //封面图外链
					intPic: '',// 封面图内链
				    outContent: '',// 内容外链
					intContent: ''// 内容内联
				},
				// 校验规则
		        rules: {
					name: [
						{ required: true, message: '请输入标题', trigger: 'blur' },
					],
					tit: [
						{ required: true, message: '请输入链接', trigger: 'blur' },
					],
					type: [
						{ required: true, message: '请输入类型', trigger: 'blur' },
					],
					pic: [
						{ required: true, message: '请输入图片链接', trigger: 'blur' },
					],
					time: [
						{ required: true, message: '请输入时间', trigger: 'blur' },
					]
				},
				// 大类型
				listTypeArr: [{
		          	value: 'dblz',
		          	label: '代表履职'
		        }, {
		          	value: 'rddt',
		          	label: '人大动态'
				}],
				// 小类型数据
				typeArr: '',
				radio: '1',
				radio2: '1'
    		}
    	},
    	components: {
    		headTop,
    	},
    	mounted(){
			this.initUe();
			// this.listenRadio();
    	},
    	methods: {
			changeListType(value) {
				if(value === 'dblz') {
					this.typeArr = [{value: 'scdy',label: '视察调研'}, {value: 'dbfc',label: '代表风采'}]
				}else if(value === 'rddt') {
					this.typeArr = [{value: 'ywsd',label: '要闻速递'}, {value: 'jygg',label: '决议公告'}]
				}
			},
			// 提交数据
			submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						Object.assign(this.formData, {activities: this.activities}, {
							category: this.selectedCategory.join('/')
						})
						try{
							let result = await addShop(this.formData);
							if (result.status == 1) {
								this.$message({
					            	type: 'success',
					            	message: '添加成功'
					          	});
					          	this.formData = {
									name: '', //店铺名称
									address: '', //地址
									latitude: '',
									longitude: '',
									description: '', //介绍
									phone: '',
									promotion_info: '',
									float_delivery_fee: 5, //运费
									float_minimum_order_amount: 20, //起价
									is_premium: true,
									delivery_mode: true,
									new: true,
									bao: true,
									zhun: true,
									piao: true,
									startTime: '',
				       	 			endTime: '',
				       	 			image_path: '',
				       	 			business_license_image: '',
				       	 			catering_service_license_image: '',
						        };
						        this.selectedCategory = ['快餐便当', '简餐'];
						        this.activities = [{
						        	icon_name: '减',
						        	name: '满减优惠',
						        	description: '满30减5，满60减8',
							    }];
							}else{
								this.$message({
					            	type: 'error',
					            	message: result.message
					          	});
							}
							console.log(result)
						}catch(err){
							console.log(err)
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请检查输入是否正确',
							offset: 100
						});
						return false;
					}
				});
			},
			// 初始化百度编辑器
			initUe() {
				var ue = UE.getEditor('container'),
				    that = this;
				// 监听百度编辑器的内容变化
				ue.addListener('contentChange',function(editor){
					var txt = ue.getContentTxt();
					console.log(txt);
					that.formData.intContent = txt;
				})
			},
			// listenRadio() {
			// 	var contentUrl = document.getElementsByClassName('contentUrl');
			// 	contentUrl.click(function() {
			// 		console.log(111);
			// 	})
			// }
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.button_submit{
		text-align: center;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	}
	.avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	}
	.el-table .info-row {
	    background: #c9e5f5;
	}

	.el-table .positive-row {
	    background: #e2f0e4;
	}
</style>
