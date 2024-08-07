function calculate()
{
    function days()
    {
        let startdate=document.getElementById('pick').value;
        let enddate=document.getElementById('end').value;
        let start=new Date(startdate);
        let startday=start.getDate();
        let startmonth=start.getMonth();
        let startyear=start.getFullYear();
        let extend=new Date(enddate);
        let extendday=extend.getDate();
        let extendmonth=extend.getMonth();
        let extendyear=extend.getFullYear();
        if(startyear==extendyear)
        {
            let leftday=0,remainday=0;
            if(startyear%4==0)
            {
                let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                for(let i=startmonth+1;i<extendmonth;++i)
                {
                    leftday+=mon[i];
                    if(startmonth==i-1)
                    {
                        remainday=mon[i-1]-startday;
                    }

                }
                return leftday+remainday+extendday+1;
            }
            else
            {
                let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                for(let i=startmonth+1;i<extendmonth;++i)
                {
                    leftday+=mon[i];
                    if(startmonth==i-1)
                    {
                        remainday=mon[i-1]-startday;
                    }

                }
                return leftday+remainday+extendday+1;

            }
        }
        else
        {
            let leftday=0,remainday=0;
            function counttime(startyear,extendyear)
            {
                let count=0;
                let i=startyear;
                while(i<extendyear)
                    {
                        
                        
                        ++i;
                        count+=1;
                    }
                return count;
            }
            if(startyear<extendyear)
            {
                
                for(let i=startyear;i<extendyear;++i)
                {
                    
                    
                   if(startmonth<extendmonth)
                    {
                        if(i%4==0)
                        {
                            let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                            for(let i=startmonth+1;i<extendmonth;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                            {
                              remainday=mon[i-1]-startday;
                            }

                            }
                            count=counttime(startyear,extendyear);
                           return leftday+remainday+extendday+365*parseInt(count)+1;
                           
                        }
                        else
                        {
                            let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                            for(let i=startmonth+1;i<extendmonth;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                              }
                              count=counttime(startyear,extendyear);
                             return leftday+remainday+extendday+365*parseInt(count);
                             
                        }

                    }
                    else
                    {
                        let n=0;
                        if(i%4==0)
                        {
                           let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                           for(let i=startmonth+1;i<12;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                            }
                            for(let i=0;i<extendmonth;++i)
                            {
                                n+=mon[i];
                            }
                            count=counttime(startyear,extendyear)-1;
                            return leftday+remainday+extendday+365*parseInt(count)+n;
                        }
                        else
                        {
                            let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                           for(let i=startmonth+1;i<12;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                            }
                            for(let i=0;i<extendmonth;++i)
                            {
                                n+=mon[i]
                            }
                            count=counttime(startyear,extendyear)-1;
                            return leftday+remainday+extendday+365*parseInt(count)+n;

                        }

                    }
                    
                }
            }
        }

    }
    function interest()
    {
        let amount=document.getElementById('amt').value;
        let amt=parseFloat(amount);
        let rate=document.getElementById('rt').value;
        let r=parseFloat(rate);
        let total=parseInt(days());
        if(total>365)
        {
            let count=0;
            while(total>365)
            {
                count+=1;
                total-=365;
            }
            for(let i=count;i>0;--i)
            {
                amt+=(amt*r*365)/3000;
            }
            amt+=(amt*r*total)/3000;
            return amt;
        }
        else
        {
            amt+=(amt*r*total)/3000;
            return amt;
        }
        
    }
    document.getElementById('out').innerHTML=interest();
}