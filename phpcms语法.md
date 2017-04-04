#phpcms后台语法：
##页码
	{pc:content action="lists" catid="$catid" num="25" order="id DESC" page="$page"}
	        <ul class="list lh24 f14">
		{loop $data $r}
			<li>
				<span class="rt">{date('Y-m-d H:i:s',$r[inputtime])}
				</span>·<a href="{$r[url]}" target="_blank"{title_style($r[style])}>
				{$r[title]}
			</a><>
			{if $n%5==0}<li class="bk20 hr"><>{/if}
		{/loop}
	        </ul>
	        <div id="pages" class="text-c">{$pages}</div>
	{/pc}


#上一页 下一页
	<div class="f14">
        <strong>上一篇：<><a href="{$previous_page[url]}">{$previous_page[title]}</a>
        <strong>下一篇：<><a href="{$next_page[url]}">{$next_page[title]}</a>
    </div>

## 推介位：
	{pc:content  action="position" posid="1" order="listorder DESC" num="1"}
	{loop $data $r}
		<div class="col6 pad">
			<a href="{$r[url]}" class="right col6">
				<img src="{$r[thumb]}" alt="">
			</a>
			<div class="left col6">
				<span>{$r[title]}</span>
				<span>{$r[keywords]}</span>
			</div>
		</div>
	{/loop}
	{/pc}
/*
action="position" 代表推荐位；
*/

##单个项目页的获取
	{pc:content  action="category" posid="16" order="listorder DESC" num="1"}
		{loop $data $r}
			<a href="{$CATEGORYS[19][url]}" class="left col4">
				<img class="img" src="{$r[image]}" alt="">
			</a>
		{/loop}
	{/pc}

/*
{$CATEGORYS[19][url]} 19是id；
*/



##面包屑
	1、<a href="{siteurl($siteid)}" class="con hot">首页</a>&nbsp;>&nbsp;{$CATEGORYS[$catid][catname]（或者{$title}）}
	2、<div class="crumbs"><a href="{siteurl($siteid)}">首页</a><span> > </span>{catpos($catid)} 列表</div>
		(1)、找到include/typelink.class.php文件中的GetPositionLink方法，首先是去掉最后一个栏目的超链接，找到一下代码
		$this->valuePosition = $this->GetOneTypeLink($this->TypeInfos);
		更改为如下代码$this->valuePosition = $this->TypeInfos['typename'];
		(2)、还是在GetPositionLink方法中，现在是去除最后面的样式">"
		找到 return $this->valuePosition.$this->SplitSymbol
		更改为
		return $this->valuePosition;
		(3)、$this->SplitSymbol这个代码就是dedecms面包屑导航里面的 “>”,	这个的更改是在该文件的43行，可以通过更改
		$this->SplitSymbol = $GLOBALS['cfg_list_symbol']；这句话将样式改为自己想要的，但是更改完了之后二级栏目和三级栏目直接的连接也会相应的更改，那么如何防止其更改呢？
		(4)、将LogicGetPosition方法中的
		$this->valuePositionName = $tinfos['typename'].$this->SplitSymbol.$this->valuePositionName;
		更改为$this->valuePositionName = $tinfos['typename'].$GLOBALS['cfg_list_symbol'].$this->valuePositionName;就可以了






##list的获取
	{pc:content  action="lists" catid="$catid" order="listorder ASC" num="5"}
        {loop $data $r}
		    <div class="gxxy-nr">
		    <a href="{$r[url]}" class="aas">
		    	<div class="nr-left">
					<img src="{$r[thumb]}" alt="">
				</div>
				<div class="nr-right">
					<h2>
						{$r[title]}
						<span>{$r[keywords]}</span>
					</h2>
					<div class="gxxy-x"></div>
					<div class="nr-z">
						{$r[yuexin]}
						<span>{$r[fuli]}</span>
					</div>
					<div class="nr-d">
						{$r[didian]}
					</div>
				</div>
		    </a>
		   	</div>
        {/loop}
    {/pc}
<!--  -->

##单页的获取
	 {pc:get sql="SELECT * FROM v9_page where catid=28"} 
		<a href="{$CATEGORYS[28][url]}" class="col4">
			{$CATEGORYS[28][catname]}
		</a>
		<a href="{$CATEGORYS[29][url]}" class="col4">
			{$CATEGORYS[29][catname]}
		</a>
		<a href="{$CATEGORYS[30][url]}" class="col4">
			{$CATEGORYS[30][catname]}
		</a>
     {/pc}

##nav的获取，以及循环
	{pc:content action="category" catid="0" num="4" siteid="$siteid" order="listorder ASC"}
        <ul class="container nav">
            <li>
                <div class="divs">
                    <a href="{siteurl($siteid)}">首页</a>
                </div>
            </li>
            {loop $data $r}
            <li>
                <div class="divs">
                    <a href="{$url}">{$r[catname]}</a>
                    {pc:content action="category" catid="$r[catid]" num="4" siteid="$siteid" order="listorder ASC"}
                    <div class="fei">
                    {loop $data $v}
                        <div class="xian"></div>
                        <span class="nr"><a href="{$v[url]}">{$v[catname]}</a></span>
                    {/loop}
                    </div>
                    {/pc}
                </div>
            </li>
            {/loop}
            <li>
                <div class="divs">
                    <a href="{$CATEGORYS[13][url]}">{$CATEGORYS[13][catname]}</a>
                </div>
            </li>
            <li>
                <div class="divs">
                    <a href="{$CATEGORYS[14][url]}">{$CATEGORYS[14][catname]}</a>
                </div>
            </li>
        </ul>
        {/pc}
    </nav>


##双层循环
	{pc:content action="category" catid="$parentid" num="4" siteid="$siteid" order="listorder ASC"}
		{loop $data $r}
		<div class="fen">
			<span>{$r[catname]}</span>
			<ul>
				{pc:content action="category" catid="$r[catid]" num="4" siteid="$siteid" order="listorder ASC"}
				{loop $data $v}
				<li>
					<div class="iconfont">
						&#xe602;
					</div>
					<a href="{$url}" class="">{$v[catname]}</a>
				</li>
				{/loop}
				{/pc}
			</ul>
		</div>
	{/loop}
	{/pc}

##获取父元素id
	1.	{pc:content action="category" catid="$parentid" num="4" siteid="$siteid" order="listorder ASC"}
			{loop $data $r}
			<div class="fen">
				<a href="{$r[url]}">
					<span>.</span>
					{$r[catname]}
				</a>
			</div>
			{/loop}
		{/pc}




	2.{pc:content action="category" catid="$parentid" num="4" siteid="$siteid" order="listorder ASC"}
			{loop $data $r}
			<div class="fen">
				<span>{$r[catname]}</span>
				<ul>
					{pc:content action="category" catid="$r[catid]" num="4" siteid="$siteid" order="listorder ASC"}
					{loop $data $v}
					<li>
						<div class="iconfont">
							&#xe602;
						</div>
						<a href="{$url}" class="">{$v[catname]}</a>
					</li>
					{/loop}
					{/pc}
				</ul>
			</div>
			{/loop}
	{/pc}







##show页面内容获取
{$content}



##categroy页面获取list
	{pc:content action="category" catid="$parentid" num="25" siteid="$siteid" order="listorder ASC"}
		{loop $data $r}
		<div class="yearxz">
			<h1>
				<span>.</span>
				<a href="javascript:;">{$r[catname]}</a>
			</h1>
			<ul class="yearxzlis">
			{pc:content action="category" catid="$r[catid]" num="25" siteid="$siteid" order="listorder ASC"}
				{loop $data $v}
				<li>
					<i></i>
					<a href="{$v[url]}" {if $r[catid]==$catid&&$n==1} style='color:#41B9FF';{/if}>{$v[catname]}</a>
				</li>
				{/loop}
			{/pc}
			</ul>
		</div>
		{/loop}
	{/pc}
	{pc:content action="category" catid="$catid" num="1" siteid="$siteid" order="listorder ASC"}
            	 {loop $data $r}
                	{pc:content action="lists" catid="$r[catid]" num="25" siteid="$siteid" order="listorder ASC"  moreinfo="1"}
                	  {loop $data $v}
					<li>
						<a href="{$v[url]}" class="photo">
							<img src="{$v[thumb]}" alt="">
						</a>
						<div class="information">
							<h1>
								<a href="{$v[url]}">{$v[title]}</a>
							</h1>
							<h2>
								<a href=""></a>
							</h2>
							<div class="salary">
								<strong>
									{$v[description]}
								<>
							</div>
							<p>{$v[keywords]}</p>
						</div>
					</li>
					  {/loop}
					{/pc}
                {/loop}
             {/pc}

	{pc:content action="category" catid="$catid" num="1" siteid="$siteid" order="listorder ASC"}
		 {loop $data $r}
			{pc:content action="lists" catid="$r[catid]" num="25" siteid="$siteid" order="listorder ASC"  moreinfo="1"}
			  {loop $data $v}
			<li>
				<a href="{$v[url]}" class="photo">
					<img src="{$v[thumb]}" alt="">
				</a>
				<div class="information">
					<h1>
						<a href="{$v[url]}">{$v[title]}</a>
					</h1>
					<h2>
						<a href=""></a>
					</h2>
					<div class="salary">
						<strong>
							{$v[description]}
						</strong>
					</div>
					<p>{$v[keywords]}</p>
				</div>
			</li>
			  {/loop}
			{/pc}
		{/loop}
	{/pc}














