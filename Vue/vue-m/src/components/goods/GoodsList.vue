<template>
  <div class="goodlist">
    <ul>
      <li>
        <a href="#">
          <img
            src="https://img.alicdn.com/imgextra/i4/2104518373/O1CN01Xg46Kh2BisorymuCx_!!0-item_pic.jpg_430x430q90.jpg"
            alt
          />
          <h3>小米（Mi）小米Note 16G双网通版</h3>
          <div class="info">
            <p class="sale">
              <span>￥999</span>
              <span>￥889</span>
            </p>
            <p class="hot">
              <span>热卖中</span>
              <span>剩60件</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="https://img.alicdn.com/imgextra/i4/2104518373/O1CN01Xg46Kh2BisorymuCx_!!0-item_pic.jpg_430x430q90.jpg"
            alt
          />
          <h3>小米（Mi）小米Note 16G双网通版</h3>
          <div class="info">
            <p class="sale">
              <span>￥999</span>
              <span>￥889</span>
            </p>
            <p class="hot">
              <span>热卖中</span>
              <span>剩60件</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="https://img.alicdn.com/imgextra/i4/2104518373/O1CN01Xg46Kh2BisorymuCx_!!0-item_pic.jpg_430x430q90.jpg"
            alt
          />
          <h3>小米（Mi）小米Note 16G双网通版</h3>
          <div class="info">
            <p class="sale">
              <span>￥999</span>
              <span>￥889</span>
            </p>
            <p class="hot">
              <span>热卖中</span>
              <span>剩60件</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goodlist {
  ul {
    list-style: none;
    // padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    li {
      width: 178px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      padding: 5px;
      a {
        img {
          width: 100%;
          height: auto;
        }
        h3 {
          font-weight: 800;
          font-size: 16px;
          margin: 10px 0;
          text-align: center;
          color: black;
        }
        .info {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 0 5px;
          p {
            margin: 0;
            padding: 5px 0;
          }
          .sale {
            span:first-child {
              color: red;
              font-weight: 800;
              font-size: 18px;
            }
            span:last-child {
              font-size: 12px;
              text-decoration: line-through;
            }
          }
          .hot {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>