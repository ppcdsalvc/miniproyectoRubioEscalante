import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  slideOpts = {
    initialSlide0:0,
    speed:400
  };
  gallery = [
    {
      img:"data:image/png;base64,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",
      subtitle:"Wipizz Tepic",
      title:"Tepic, Nay",
      content:"Snacks, Pizzas,Papas Fritas, Cerveza, Refrescos, Alitas",
     
    },
    {
      img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFhUXFxcVFhcVFxUXFhYYFxcXFxcYGBgYHSggGhomGxUYIjIiJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLy0tLS0tLS0tLS0tLy0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAwACBAUGB//EAEUQAAIBAwIDBgIHBgMGBgMAAAECEQADIRIxBEFRBRMiYXGBMpEGFCOhscHwQlJiktHhFXLxM3OissLSJENUY4LiFlOT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAD4RAAEDAgMECAUCBAUFAQAAAAEAAhEDIQQSMUFRYXEFEyKBkaGx8BQywdHhI1JCYpLxMzRTcqIVJLLS4mP/2gAMAwEAAhEDEQA/APqyg7zjzxWa6ExOI8OOpzzqpsoy3SgTBOr0mPTlSCpWfhQBBYgnOOlBCA6UOFsAEs2QAIg7zzigCEnOmyPfKDOlST0FEoylKW2niZiTJ+EE+8+VK2qcnRNt6JyMAfDGenyzVWU3VW4ncfs9I9qWZPKlpetqBpX1JED9bUSAnlJ1UuLcPiGx2Ejb86CCgEIWVOWceQHI8zP9qBxQY2K3dK250gZIEmeQP30QClJCrCopZeuZMH9QKVgLJ3JuoLqxEAeX+lTmTylU76CNIkc4jkJj339qoFGXend6Mk7/AH0SlCFvilPQHbbcbUZkZSo1+DiT559qMyMqo3eE6sEHYAgA+k0zKQjRLthnOkysQdx+vwpC6owLqzNcXYBvOR99BkJDKU5L0Bc55mAJ9uVVmShG8urln/NE55xv/rRqkLKv1f8AdaDvEY25CcUQnKlqbczE7Hp5QOW9Ewj5ldbiHMeI7YGRseXp86JCUEI9/Jxy5k/dSzJ5U36weq/M05SyhKucKYBZyJ5R+oFTlVZ9gCCWYhUgknJ3MHMcqcRYImblB+HOoAsCQZgTj1ohGZLvXhJgseX9qkm6oNsmadIkyWI2nEx0/QqlKQtu5q0hYncn9SamDKqWxKfc0AaVOeuN/lVW0UidSq2+FAhnOTtiSenSiN6C7cqW+FM5bwDOPCTHnSDUy4d6tee2fiAgbYz7mnbakA7Yq3uJBMiY/LlUlyYbZV8dyIMRgjp60XcizdUBYIBIbUcSAeQ3wffnTiyJEqlhe8kFdIA/UDnzqW3Td2eKs3Bhp0Fh5HA+7ankB0RnI1TFvaAAkYwY5+ZpzCUTqoEtnxRMnblPoMRNFtUu1orX11L4QVbfy85nn6UG4shtjdI+rnZ3icYEfMz+FIN3qs24IPeCnTJMbRt91OYslEiUW4lv2h5Dlt+NIu3oDRsQHEHYE+IgRGBz9tqAUFqX4hgrPRhGeW3XNK6qyZ9Wcw05E4kE/IHpPzqoKnMEF45c5nzFLMnkVkQv4w0g8nB25Y3qolKYsr3eG0+MnG2JAE/lMfKkRCQM2QuOY6fn5UiqAStbdBUwqWnjLqkzqMDBPU5wDy2NU7VSwGIQ4biyzNpOIgkbA/6Dl1oDiUOYBqqG+FGNyc5knpSJhMNlOe8NKqImJbG5qi5SGqqXl1ajGrlJwPOOu9AcNUQdNiqOKaTpEE7ScmkHEplgSrnCXSYMTzgyepxy23pZXJ5mpnEPLdSMYmNv9KCbpAWS7dtnlQxEb8hnnPKgAmyZIF0VtaZdmDKJjMSeQJNMCLpEzYJdwG5kSIwdPIVJvcJjs2Kao0rpE+KTnBPWTMzv86eghLUykLxAG2AN+h3/AF7VOaNFeWdVa9xLmZWBuR7fnTc4pNaBtSBxQwMHOwJwOedqQcmWLYbdqQBM7kgwP7++9X2ZUdqEq8CDpQEiOX9Nj7VLuCpsalSwszrBWNus/h+O9DRvScdys1ppwARyLH8utODKJEIsxSAx3nSQOWcD2NMmEgA7RA3kfwEk88wQM856/lRIdqjKW3VrV1ExoEfw/wBqA4C0ILSbylXLsMdOVxJPXng9IpGxTAkXUPEGfCZBwZMH0FAO5GXejauLM6AD7GPQkTTBEpEGIlV4jiQGwhGcchNJxhNrZClttZKzB6bgevQ5pi9kja6tcssikxqUbxMj1B5UiCFQcHWSe+t/u0rJwd66XEXAIQLIEamgHlnJqyYsswJvKA4iQqWxBJOMZPOkXbAnl2lEWEVSzpJJMKNthkRRAAulJJgFZ+Ll2GgaThSCPOBExNS4Torb2RdPCKgj4jBBbAPQgAb86uAAokkrLwzIhLBpfZdWYJ3n2qBAVmXCDog15h+3PM5/tSzEbU8o3IsLZXIYFjk7HmI5UzlSGabItFu2ZUqpIknE/wBaPlbdAlzkj62pIESNjzj2FIPTyEJ92/nTbhQJxkR6gc6ZcdApDdrlS/4zLNBGIGSfMyR86DfVNvZ0CU9i8REQOsTI/Q3qcrlQcwJ7cXphQ0BYkAzPvVF8WUZJvCNrSwLAgdeZnyp2N0jLbJPEuwMr4gfc9IM1DpBstGwRdEXbiLDbEwJxjp6U8xAulla42Vhce4PCR4cf6naPvokuFkQG6pXEakEMxgyZ5UnEjVNsO0VrYQrNwGOROJG+x2/GqERdSc02VeJ7tV1W4mf0Qdj70nQBITbJMOSl4iRAtyfORn1NSHcFRbxWi3xpAAPiYYO3t7VfWQo6tVt37erUggkdB1gmRymjM0GyMrogp124riHI55jxAkY84qpBsVIBbcKW7igAAAgcoG3Q0swCMpKrxPEWxEDyP6/UYoc4ahNrTtVLL5Cs2oNIxI5Ty/PFDDdN4stv1c9E/mWqhRm5rJ3MkKykmZPxZnOBGcVkQZhagwJC2lnZ9BBUCdliBHL1EjFaXJhZ2AlJcqoItyWkxqIPqQBtSmBZPU9pC3wjeFrjBZ+ECQc8znegN3oLho1KuWbrPpSAu0+I+uSc/fUuDiYGioFobJ1THa0nhEkkRqBgn2WmS0WUgPN0rheFRZZvERGlZnJEyQTyipawNVueXWVjxaagzJJX4YEHnyA2mnnGpCnIdAUr62pfSxJJOZOPfoBSDwTBVZDEhOfiFVtKKmkDc/KaeYAwIU5SRJlIbhXYsVaAc5zGdyRn2pFhJkKg8AQQonCqssSGG53OYxjkKMgF0F5NlQ8c2qQwjqDt7VPWGZlPqxEQpbt2mBfUTPIHTPn5D8aqGm6UvFoUu2wANCtkmQDkT5jEb+dDhayGuvcplh2TdYWJzvP6NMEt1SIDtCrW+LBkEkg4g7H0pB8oNNLucSsxBA+XX+nLpSLhom1p1Ra/iEAYTvz2nE5FMutZAbe6T9aEnkRjqJ8qzL7q+rRTjfFt4SMmJBM4g+xmtA+NVBp2smL2gQY5cwRy5Ecoo628JdVaVNFo+IeLE88jlNOGg2RLoVuJTWJtyGyTzEcznnQYcJahpymHJdiyI+1I9I2zjczyoaLQ5DjfsqvEWWXKeJcbysHpMVLgRoqa4Gx1Wi1wgYCSurMjl5CT+t6vKCFGcgpRsd3MBQRyEknlt08vKpylqrMHLL9Y/i/4X/pUytMvBdLheNIDMBGMMYkAkeeeQFW19pWTqdwEn63cgJqhm6HxeXnJnpUh7tFRY2ZhXXs4hgGcTElRuDHM7b0xTvcpGrawVOK4y2XaW1EbzIOegGB7dKTntkym2m6BCPC94QWRvBkSeewbSJE4P3UNzEWNkOygwRdc8XtJJCsWMxPT2x71jMGwW0SLroAIE8Skuw8RyNM/251scoF1j2psbKvDm1aUuDrY4EydsnHvHtSGWmJ1Q7NUMaKicSzeK3bh8ERA+Q5+1IOLhLRdMtDTDjZLfh7qkIFBnnOZO8xMb0i14tCoPYbqzA20I7zduQO+esY5YpkZW6pA5zok2+MDNpjUu5AMSPbb3qW1JMKnU4E7VcG27ZUYz4P4Rsc4pjK43HgpOZosfFWu3Q+LQ0sDnznH7XPO00yQ6zbFIDLd1woiNbBbvASB8Iz8p9aYBaJlBIcQIU4cNcXJIE88AnO05+Q50Nlwuh0MNlS5YuiAWxOCoMfnBqC14Ikqg5hmAmvxVt8MvoRn5z+pq87XahRkc3Qplm+wkINAGP1FNrjoLBDmjU3KVxNu25loLcxA2HwnYbwflSc1rrlDXObYK1ribbeHSAIgEeH5Hlmhr2OtCHMcLylW+FIJDvKbQOcdCCMUNYQe0bJl4I7IuqcSwtwVJ0meXiB6RO0bR0qX9mI0VM7czqqcKmue71COZwD5AkiKGCZyoeYjMrvdNoxcB9SJBHlvigksN0AB47Kb3rxqUHu98T/THOM86skgW0UQJg6qvejBYk9CD+fKpDt6rLuVvrPimGBjnPijHptVl8FSGSFP8Tbz+Z/rU9cVXUhMvdoM4YXVhDyx5bA0utJnMLI6oCMmqueKsKQ1u2IgRnJI9/KqzsBsFOR5EOKw8R2gx5aSxJAA3AJjbkKwdVJ71u2kAn/YC2usaneDpyQPXqfwmtP0wATtWf6hJy6BTiCxIFsQqr+0c7kyRsd6bpJGXRDYjtarTxHGsphVXSvp4zvtzPrVOqEGyzbTB119Fl7nvNVx7mlcA8yDnwgHyHpWZbm7RNlqHZeyBJVGsoVBtGCGkllB2B9Dpz86MrSJagOcD2kuyzWz3jPqMQAOhwcH8ahpLO04yqcA/sgQpw3EM7QhYTvE4AIB043/AKU6by/5ffJD2Bgv75ptqbYZrwkCFUHYdPuHKqBLAS9SYeQGI2OMtL8AAc4jEZzTFRg+XVJ1N5+bRBuJJBW5A1cxsI6ERmgPkQ9GSDLULdhBEEtGZnn0Ajb3E0Na3YgudtSbaXxlV0jfBG37UeX9ahoqC4CommdSnNxOomSI56cnpHpTNSSUBkAKDjUTwmSN5zj+uJoFVrRBSNMuuFb64GlVABIMTggxy5k1QqB1gp6vLBJWa731sSygjbJET0PQ1k4PaLrVpY7RMtcKGUFmAc9NR6xzxGNq0DA4X1WZeWmwskFLpcI0R+8CRI8sZBjH51AD82Uq5ZlzBS9ba2AVYONvCZiPIwYjn/Sk8OaJmU2lrjBELRwR1L4n0k7Aidp3A/rWrO0LlZPsbBVvX2VioZdX4yNxyik95aY2ptaCJiyB4ttMOgbOCDsemNgaM5y9oJ5Bm7JVrfaLCNvLPt75ptrGYSdSEJdzh7c5UiTIEyDEzOkx+VItaDoqDnRqtg4pDCsqnlEf6EGtA8OsQs8hFwVXubX7rf8AFRDNxRL94S+ES0HLu1wgSwVyTkZ5eL3PSsKYYHFxnvWry8tyiO5C7dtXri64SYgqf2ZAJbpj8RQXMqOE2TDX02nLdaeJ7SQGAqqBGkEAkxzYgzGBz51o6s0GFk2i4idVnupfuTcDKyjwgMFAxnBHrtvUObVd2gQraabeyQUnh+O7lSHCvcLZkGFGMbfr8YFbqhD7mVZpdYZbYJj9mFwLjXdOs6wCJYg+TTH66VTqGeHZtbqRWyy0N0sqcWe5RVQFtR3U6lGMyN5nnSqHqmgNvKbP1HEu2eKpw10u4kMEAJJiDjOBO33Uqbi50kGLpvaGttqm90bhL2mwPi7wxB9OpnGORoLS85qZtxSDgwZXjwV34o20W3I1NJZlzC4gyMR0qjULAG7TqkGB5LtmxZWvpcIR7uN1OMfvSfT8azzsqdku5K8j2doN5pz92VNtJDHAOrJ/zE4rTsEZG6qO2DmOizWuzm/buY5A/iTt5VnToOA7RWjqwnshG7btklVkuOSkaCea496bg2SG6+SQLtXaeatcvXQ41K4OIjED/MRypl7w4ZgUg1haYIVr3BcrdzOSQQNPXeeXoJodRn5ShtWLuCvwgCLFyWJzDGFHIbH9edUzsNh11L+06W2VOI7tYuKCGOIGYJ/aB5g550n5WjMNVTczuydEOG48tK28tEGeYO+BzpU62aQ3VFSllgu0WbiL7AxcBVsZ0nM8j5/0rJ7zPasVoxojs3CZfu3QoYkwNgd4nn03mPOtKjngSVmxrCYT+z9bgk+AdJEN1kCfx5mtKWZwnRRVytMapXFl7ZgqTOQwZYPmdqh5cw6K2ZXjVaW4EMNRAOJ8JgjEmev6862dSDjJWQqltgl8NfW2ulIP72AffxTUMe1tmqnsLjLkOJv2JDgeKcwoieRURz5j060nupjtJsbU+VNt8eXUrMzIGoicDBG0Zq2Vc4IUOphhBWJe9GdBJAjVy+c78tqwAqA6Lc5N6b3t3y/mNa9YVGUKh7NZmEXEe2JDsA/8sE7nrXK3DuJnMCNv2WxrADQg+7rZe4nh7Z+y7s6f29eZWCDjHt0PrWrq1CmYaR4rIU6r/mnlC5d2xeUgG6vihpjxnWA0Y33npmuOoys1wGYX85XU11JwPZNvCy28R2ddRURXjObeoY6kY9PTPt1voVGtDWHuXO2qxzi5w706zZGy6rmclACMHYCNtorRoB0vyUOJBvbmsXGdoBrjrKwsbT8UeQjAxFcdfGMDy1xFvXu3LenQdlBHsJXDdpstyAgdwpcrpgiP1tzijD43OJYJTq4cRcwFdu1jcMOC6kyRDKJAwPFmZIx61fxeckG48Evh8gkWS7rzFtNAk+JTqUnp4pO2faoc9rh1bYnaNPNU1pHbdPPXyVnsqR4/iGQbZbwjYT1H3TTc0OZFSx/l2KQ4h3Z047U63csJKqAwgk3C2AZ5TI5DcVbH0GHI3xnb74JOFV3aPhGxZhwWwZxo/hSSR/nz/eoFGD2nW4D6qjV3NvxP0Vu7u94Qq6twCW8OmAZIOxik5tbrIaJGnDmgOp5JcYWl/sRLhQxwGXBaZnSRIjFbveKAzPEHesmjrTDdNyUnaJP2YBYNOk4JJGcSQZkVLMQXS1txsTdRA7Rsdqrwqxm87AaoCsIYsIPPfeookiTVJF4g6q6lxFMBV40XEb7MMyRIOxnnIJzmcgxTrCo09kGEUyxw7REpvBByuvWEJMfETMYzGxmdq0pZizNMHmoqZQ6IkKX7rWm3XW2Z2DL1B2meXUVNR5pHUSfRDGioNLBQdoNGltJYGA0mIiSB5eIcxvzzVfEHLeJ3o6kZpGit9acLLWjpbA23O2BOfPzqhVeGy5qk02l0ByR9enxFIHv94FZmvJkhaClFgU1OOYqUVwcyPCZUgYz7xEedatqktIB5LM0xmBISuH1FhqDry1MRjHLEkZ2is6RcTcEcVdQCLQUb/AuANGl18pUrzySOf62pPovHy3Hmm2q0/NYpvDBdH2ikn+FQIBO20kb/ADJrVhbkGcX4LN4dmOUq9/g0UC6hIjAViSwmI3O3nGKZptYA9vmk2o5xyOV17TZTjJ8sqR+vKmMQQUjQaQtf+J2+ln+Rv++ujrafBY9S/eV5Xj+IeR3btA/eaQT0OmYwTvGw8yPlKeIquEPcffNe2aTW7ApZtAxCqqtk5J1HGwyIJKnM7bZkZPMy7d75zru+iv5bao8HfuozHO5Nq4jD9kxBBzggicjAq+uc1zXsdBtPvTuKgsa8QYhPs8Vcde8dmLwQQIgMDks/w+vvvTq4yt1nzd+3uGqltFgFhZPscTd0gSy2zLgqFGtmMywkctuUGKD0hVaMjSJBuPfgl1NNxmJWK0+oPdZlbJAYPBHVXI6HoDWFVznPgzJuba8R7C1aQ0QNiQ+pTrQ92VTVcADaj1YxLTGP2oPPGdqdTJGUmZgX04bB6KXQ7XRab5L6ZOq1cU6STIBMMCxXY4Ee/pTGMfBD7kbNEhTAMtSrlpiCB5hTDEiAMwTtPLExM7Vkxps4D33LTMDqtvD8F9iNTJ30YXU0N0k6TpBzj+tdQwziZFQAnRu37TzXOat/lsNq53GBkTU0lVIJMNtAyR0yPlzrnYcz7a/ZbFwiF0eHV2AYE5Eg6pABEny3/tirfjy2Reef0WXVjuSOG7VuNKq32ZYrrCg/CNwd2Ek5GMeVdD8dWZTyzfXjyR8PTLphDjbt0+EeMATklRPkG+LAOw6CsTinVm5am/n6K20msMhLsXoJYCHB+PPjEwRnr08vSqp4gUmgNF/eqH0y830V04nWVJLHdcn4cSF3mdzvzPSitVLgJcZ37r+7oawNmAk8PfIaFcEloLSWIJEwCYBMQP1FbUqtRpv4/wB0ntaR9Fo4bibhB1yCDh8nUM7RifL9GH49zeJ3+/VSKAOmm5FOOD+B0UGJGsEEgTDRGOfL1rp+KD2w8DnsWfUlpzNJWmzxWdC2dgIGhWmZkEEYB6+R6VpRxTXjLTZI00nxUPpR2nO84Ut8WtkszCdWdLKdQ32HXl+prZlZtImdp0IupdTdUAA2I3OBW+ddsxqGQOR2ghsg4kDO4qXYdlc52HX3F0NrOpDK8aK/DWrYGly8yfEpBCsYnHpH31rTawNDHE2tI2KXueXZgB37VVuEvAkaiYYj4oLLAIIBgDljzERWZpV2g3m+/XdHvkmKlIxZDgg7Bl1G2B1MA77rJz5+c0YcvewgmPe5FXK1wIE+96VxDm2SrgloBVgS2qc8uXr1rnq1TSfldrEzPuy1ptFRst03I2ZuBgwIUaRqMjedhmQdS5xnlXQAatOHcPe3aVBhjpHFPt8EYEXfBOlhicg+ZMefKNqulhy2IdI09/34QofWBmW39+/qtf8AhFv94fM/9tdPwzN6x+IduXPv22ZCocqxyGH7JG0CvimPDXTFt29eyWyjc1NGsgxBMLGogYLSdpzHUDPIgLROX10QKYVWtqcECOQgR0j0igOdrKuAoLFv9xf5Ry25UZ37ylCgsLGkliv7pZiDzzJkjyJijOZzCJ3wkWhHuxIOSeRxI9wJPuaMxiE4tCv3QJBMkgQCcMB0kQanORYIyhKfhQQfPeAA3WAwirFUiPY8EiLKLY8RJUMDkSSjBogyVEEERyxT6zsgTHnbvU5CpaskArIM/wAI8M7hSdh6zSc8Eg/XXn7CYam90QFwSBkKWaAeXPI8jUZ5njtge/BGUFLXgrcQba53AELJ3Onb5zVGs+bH7+Kd4hUZHGkROg6rZQqpXEFSpxp/WKoOaZO+xm/nvU5AqXbBYE6T3hGmPDoUTuDORAHU4AgVqyrkdr2fM+/DioIKYV0A9yHVmy0lQshd5IbPLwgisgcx/UIIGmv484VQdqXb4Uso7kHPxMzCJBJYEqSWYk+gz6GzVAP6ndA9wAEpypJt/ZNq8TISABBUMPhJcHwxMnYjzxOxrOJDf4T4+EX9EovKYTo8TC2xEQ5Z1UAfCMhgAP4T7Vl81myOEA891+auLSVQWwLakxqJChzrAUE4LCJWAeZE842FF2Z53breV49fqpuLrXoKuVNwgMNYKktkGDOdRwRk45Yp08XUbT/TJF9NPx3KCwOMkLJxF5yrXWkkHSpII8IhZY8szhs484rarWNeoA83j3z93TY0MEAKXltqp3EAwcmDkkySTPn5+lag0nkZSQQp7YSrauLcrJYznOJkHYgECScxsJB559Y/NqQPfs6/ay0RxV7WsL4H1NgK3iABOwkD4vSeQgc18S8OBkiOP59+iLGkQQtKd5JLlsGVaCSQZmYBIO3IzQ7GvJBa6T3W97bpCk2IhROLuwneKoLFtIPhfGdREzE+UiSYrqHSV9Acu0ceO9ZdQ06EocdxzOGOnC+GU1/aHrgRgncwOdFTHmrAIiRe/rxRToBl+PsLDbbVL5YwMA8x8sSN4I+UVgXunKZPH3K6A0Kuu9/+u9/On9a64q/uPifssuxuC9D3dfN5l0Sh3VPMnKqbNPMiVO6ozIlDu6eZOURapZkSj3dEpSrKlSSlKsUpSiVU2qrMnmRikhCKaENFEolBlpgoUANFk1RrCkzpyd4kT6wc0w9wGqSpastbMoAV2KYAA8htVOcHiHa71JAKDCc27IDdWAAHnQD+51uCZBjVaLKaVCkz1PUnes3HM6VICTc4VCCoULO+kAfhWgqOBmVZG1Z7vDwpRreoHmOY8/PzrRtQzmBhEA7Urj0d0VH16dQEeEFo2DEcpjaNquk5rHFzYnv8vZUlg2Jroot+IPr0x3YEsW28OIIPXakKlQugG2+bQo2TCNm0SoV8lQAcmAYGw/Ooc8ZiW7VbYK0mwsM0FmKxklpG8eKcVnndIEwPD0REFL4fgkI1LoViIJKAsvkDO3lVOrOBymSOdik430WXQrswUhgsKxyuqP4lIk+uK1ksaCbTpt8lQMqWuACtIthbcR98/Cmw6GSd5FM1yW/Nf3tKmNivoP76fyXf+6ln4HxCcO3Lt93Xnys8ynd0SlmU7uiU8yHd0ZkZkDbpynmQ7uiUZkRbolGZHu6JSzI6Kd4zbEsyhSplEqpt05TDlUpTlVmQ0USiUviHVF1MYAiTBO5jl61pTY6o7K3VUCSYCuiggEEEHIIyCOtS6WmDqkXQrd3UylmQ7uiUZlFtmM5PWgm9kZkGSnKYKoyU5TlV0mnKal2yGEGm15aZCEZugQCvQEzPypfpkyZUlrVTheF0gySxJlieZ/pVPqZjYQgWTwtZyiUu7w6nJUVTXkaFMOQSyAIAAHQUFxJkpyo1qetAciVO5FPOUrLoVzLnUppqUklKEKRQhSKEKRQhQRQhWihJSKEIFaE5VQKZkapyppolErk8Vxq3EuooiR3aEkS7OMFV30iQZ6SeVelSwzqT2PceJ4Abzv2Qt2tykE81otWtF7SCdLq76eSlWSdI5TrJPnWDn9ZRzEXaQJ2kEHXlACgmWzuW/TXJKzlTRRKUo6KUolVNunKYcqG3TzJ5lO7p5k8yoVpyqBQAoTKYq0pUEqFKUolDRTlEqaKJTlDu6cozKaKUozJs1KlChCsKElKEBSkgo0JLmcRfdnZQML99ddINa0OO1atAhLa4y56ZNWS19oCeVdS08gHqJricIMLIhXBpJJfFqxQhYmMTgehq6Tg14cUDik8LbYMSQQIAgmTPM4rWtWNQCTJTMbFfi+KW2uttsDG5J2AqKNF1Z2RqbWFxgJHZqjQBAlC1uecIxUZ9BW2Kcc5M2dDvEAqn687+KnaPCC4pyZCsBpMTMSp8pUbQcUYauaLtBEjXZx8CU2OylX7O4ouviUqwwyncGAQfcEH3qMTRFN/ZMg3BHvYVL2ZTZbVNcyzRoSUoQhQmgRTQlstUCrBVQtOU5TFFSSoJV4qVMqRQmhppolSKESjppJSkzVwtEaEIikkoaEIihClCFyuI4e4t3vUMqfiX7prqY9jqeR2uwq2wbFWud5c8IGkH4ienMCk3Iy8yrIAC6K4rmKxVhQhSkkjQhYu01GlWIlVaWET4SrI0jmAHJ9q6sKTmLQYJEDnII8wtKZ2BUvoCEtJCq0k6ceACTEdSy+xNXTc4F1V9yI13nfyAKYJu4o9meFRaI0tbABA2I2DL5GD7zNTihmeaoMhxP9jxHpoipc5t6vwh1PcYbagoPXQIY/Mkf/GlWGVjGnWJ8dPK/ek6wAWwVyrNWFJJQmhCE0IUBoQpFCFNNNCNJJBmpgJgKouU4Tyq4NSkiBSlJGKJSWNnAEnatgJsFvCQOPWtjh3QjKmvxahdRMDr0nFTSpA1A10xw1UkFVs8QxYqRy1CPXn+uRp1m04zMBHmnlhaNVYQkhrohOFJpwiEZohJGpQjQkjQhShEIGhCxrwCq4dWZQNXhEafFvAIkCQDAxiuo4pzmFjgDMX2205991pnkQVL3BlnLd4wBULCwDG58W4nyzjBFJmIDGZcoJmZP24eCA+BELVaQKAoAAAgAbACudzi4lzjcqCZuUwVKlWNJJVpppPE8SltS7sFUAkk9Bv61pSovquDWCSkSAJKzW+17ZsLxDSqMAVDDxmfhUKskseQEkzWzsHUFc0BcjWNOJkxAG0mygVW5cxTuzeOF5NYVl8ToQ2mQUYo06SRup51niKBovyEg2BkaQRI1jemx2YStYrBUpQhKcVQVBL2ycVYBNgqKfaYHIzUPaWmHCCsymTUKUZohC4fbdzTaLcgQTHSu3DDNUhdCFgW3VXU4Iqnl7XFrkwmdnoCG5qTEHbG/wB9RVJBG9Jy1paVfhAE9KyLidUpnVWmpTQpoUoQjNJJEGhBCsKSlGhClJCxXu17Ckqbilhkoku/8iS33V1MwVd4zBpjebDxMBZmqwGJUtdpaiNNm8QSMm3oAnmRcKmPaaHYXKCXPb4z/wCMjzSFSdAffNU+s8UY08Oijn3t6GHtbRwf5qrqsK35qhP+1tv+TmnySzVDo3xP2BRZeLOzWEPmly5/1pROEGx572j6OT/UO71+yhscXGOIsz58O2n5C8D99LrMJtpu/rE/+H0U5am8eH5VxY4mM37UyciwwxAgQbp5z8x0yusw02pu/rH/AKhGWpvHh+UDw/Ecr6e9n+jijrcN/pn+r/5Rlfv8lzuN7N4h3BuulxBDabVs22JWSoOu6RGqGxuVA9euji6NNpFIFrja7pF9TZovFuEyqDHGziI10/JWHgrFyzwtl3B+sMqWLChc2VIyUVv/ADBbVnM/uhdhXVVqU62Ke1n+GCXOM2ceJH8OYho55tSuYAtYCddBw/MX8l6TshrXdKLU6V8ENq1AruH1eLXO85Mzzrx8WKvWk1dTe2kHSItG6OS6KZbl7K2iuZWpQhAimhZeNslgIgwwJBxIyInrmfUVrRflPcqBQ4C2w1FhAJ8KzMACJJ6neKuvUD8omYGvvYEjqtc1zJQpqohELMygiDmtQYWqyjs22NhA6A4rbr3nVUHlc3ivpDbt+C0uqMTML7YzXoUeiqlQZqhjzP4WraBNzZJt/SjPit4/hbPyIzWzuhhHZffiFXw+4rocT2uot94g1qCA0HTpnbcVxUsA81Orecp2bZjvWYpEmDZL7N7aF59GgrgmdU7e1XiujjQp580935TfSyiZXS4i7oRmidKlo6wJrgpszvDd5A8VmBJhcfh/pDrYItoyTAlwB+FepU6K6tpe59hw/K2NCBJKxfSDtXirN4hHtadOsK6wNM6d5lnnOIAHI5Nb4DB4WvRlzXTMSDt100Ajf46Ly61Sq18NI9/VZ7P0t4hWKtbS5AB8JKxMjmfFtzCn1rd/QtBwDmuI53/t5roYysHFrhJEacefLhwlaE+kd12hiLKZGpF7x/Iy2F9NLVk7oqnTbLe2dxOUeVz4hbOw1UzBA8z9vI81207JtOJdnvgj/wA1yyMP92It/wDDXlnGVaZhgDI/aII7z2vNc5oj+KTz+2i5Y+kPdE21sKoUlYRoGDBgBfKvQ/6X1wFQ1CZE3Em/eu1uFbFj5L0fDcQtxQ6mQRI/ofOvEq0nUnljtQudwLTBXI7U7eNm4bfdhoAM6o3E7RXpYXowV6QqZo7vytqdDO2ZXR7K4prtsXGULMwAZwDGcDpXFi6LaNQ02mY1tCyqNDXQFpvswUlV1MNlnTPvGKwptaXAOMDfqoABN15z/wDLf/Z/4/8A617f/RP/ANPL8rq+F4+X5RT6WdbOPJ5/6aR6F3P8vyg4XcV2ez+0kvKTb3G6tgg8p3x5ia8zEYR+HcBU0O0X+3gsH0ywwVweL7dI4gF7f+yDrpDz42IBadPIKQP8xr16XRoOHIa/5oMxsGyJ3mTyCsYTMQ7Nbks/E9uy/e2kNu4fi8QZLkCALiQJj94EMOsYrWn0bDOrqOzN2Wgj/aZMciCOE3SdgTMtdB5a813OxfpHbvnQ32d2JKMd+pRv2h8j1ArysZ0ZVw/bHaZvH1Gw+XFc92nK+x3fbePZgrp8XxSWlL3GCrtJxJOwHUnoK4aVF9V2WmJKe2F5/iPpYJhLcjqxg/ID869qn0LbtvvwH1/C624XeVfgvpQjGLiaP4gdQ98SPvrOt0O9omm6eGh9+CTsMRoZXfDA5G1eOQQYK54RmhEITQiEmqWi4n0i44i3pU/ESp8o3E+ePY/L2ujsLTLg83IvGwbue9aUBL77Fw+yuB71iJwBMSAT6TXp4vFCg0GNV01KmUWXTbsFXVtEq6mIJlWwD6g5rz29KOa8ZxLT4j7rFtcg9paOP4IWuDZOY0knqS6z/T2rLD4g1scH7LgcoKGOzVZXI7B4tLV0s5gaSNickjp6GvS6QoPrUsrNZ+62qtLmwF3OL7bsMjqGJJVgPC3MEdK8mj0diG1GuI0I2jesG0XghcDsP/b2/X8jXs47/Lv5Ler8hWr6acX4rdoKCfiEjYnEzyAA+8Vy9C0ew6oTw981ytgRAlx04bzy/ttR+jv0eVk13CTqJOMFjsWPliAOgo6Q6TdTf1dMaeXD7qp6rsi51J3n34Cyt272KLS95bJ0zBBzE7EHpRgOkDWdkfrs4rWlVLjBWr6I8WSGtE4HiXyzDfeR8zXP0xRAy1RyP0UYhujlw+1B9td/3j/8xr1cKf0Gf7R6Lop/KOS3/R3tTum0MfAx/lPX06/2rk6RwfXMzt+YeY3fZZ1qeYSNUPpUPt/VV/MflT6KP/bjmUYf5F6XsMf+Ht/5fxzXh4//ADL+a5avzlbga41kvnPD6Q66vhDDV6SJ+6vtqmYsOXWDHOLL1HTBhdbtziOD0fZAaywAKqwGesgCvOwNPG9Z+qezG0grmYXtIz6aJv0PtN3jP+yF0nzJIIHyB/RqOmXt6prNsz3XTxJGUBcvt+2Deuqdixn3rvwDiKFMjcFbWB9LK7Qha7fC9n27TaNRuFIEm4SGjEasATv1865TU6RqVhmgNB/l07r6LloYZ1J8t8zNlzOAu2TfS3d0sCcoy6wRpJI0wZwDXfiG1RQc6nIOwgx5yFpiq1GDTeRO7VD6VnhtXd2LaW4X9myykk5IA0g7Rt51PRYxIZnrOLpO10xHeQuDLR6sgWcdOyfAQNvC69D2F2Ar2luXplgCFBiAep5mvKx3SbqdU06UW2rvdiHaARv5rL2/2MLMOhJQmCDup3GeYxW/R+POIljxcea1o1c9jquh9FeLJRrZPwQR6GcexH31xdL0A14qDbrzCzrsEyu5qryYWEIa6ITyoTThOF5v6TcEB9qsyzQ2cbYMctq9voqsSTTO6y3oalI+jrWixV8NujSVPRlkdcY8q26TZUyhzLjaPQqqzTYheivcRasLkhRyG5JO+NyfOvEp0auId2RPoudrS42Wft5weGcgyDoII5gstdHR7SMU0HUT6FVSHbC8x2XwPfPo1acEzE7Rykda9/FYjqKeeJvG5dT35RK6PF/R7QjObohVLGVgYE76sVwUelesqNYGakDXf3LL4gbRHeuP2Nx6i9bMXCJ/Zt3GmQRgBc+1eljKDnUHCRptIHqVFTEsLTAP9LvsndrObt36xHgddNqQQSimC0HIkifTTWeCaKVLqZuD2uZvHcLc5UYOHzU7hy/J9AvS/R3jFa0qSNS4I5xOCK8PpLDvZWL4sdqqs0h0pX0n41Rb7oEFmIkdADMn5CteisO81OtIsPObJ0GmZWL6JWz3jtyC6fckH/prp6YeOra3jPgPytMQbALl9rH7a7/nb8TXoYQfos5D0WtP5Qul9Iuy9B71B4W+Ifuk/kfx9a4ujcZ1g6p5uNOI+49FlRqT2SuRevM0ajMAKPQbD769JjGsnKNTPetgANF7fsY/YW/8or5TG/5h/NcFX5ytwNckLNfOrCanVdtTAekmPzr7Z7sjC7cPRemTAldDt3sNERtNwlhBggQDIIMg9YxXBgekXVXjM2AeK5HPNUZdNx3EXHmmfQ7tBtfd8jqlf3XAmfkPeRU9MYZvV9ZtEX3glDyKjM0QRY8OH24LL26f/EXP835CunAj/t2cl0UvkC3cV2Jbt2e9a6V8IOVkEkYUAZJJwAJNcdLpGpUr9U1k3jXYNu5c78WGfMLLi9ks5upJKKxCMEaLjKxAjWuU3/ZM+Yr08W1nUu0JAJEiRI4HXvtwSqUn1hLhlH/LvOzkPHYt3b/Z6Wr50qAGCkHcnEGWOSZB3Nc3R+IdWw4zGSCR9dFeFpsa2QBO/b4r1HYPGK9lACNSqFYcxAiY6GK8DpCg6nWcSLEyDzWVVhDiVz/pXxq6BaBBYsCY5ATv5zFdnROHfnNUi0QOK0w7DOZJ+iNs/aNy8K++Sfy+da9MPEMbzKrEHQL0LV4gWAVaaFWaE0viLKupRsg4/v61pSqOpvD26hMEgyF5XjexriHA1LyI38pG819HQ6QpVRcwdx+66m1WnWyz2OzrjMFCEE/vDTt61q/F0WNzF08rpmo0bV1+0lKWRwlsNdukB4GAq6p1EnZZEDc+W8ebhnCpiDinw1gtzMacTHcuN1eKlhf3qffJc36O8Pf1h2dbQ0tyU84IYMZ5co2ru6Rq0OryAF1xv8oH3WZqPqMkuA4Aes/SFu41Xv6lRhxBCnMBeHtmDEAE97emIEwsA+Exq4qLmYeHOHVyebz4xlZvtLtLjTnbL3i8x/SPufTht4S2eLVmCJLqdGpQSVZkLLicGCNz+0DXruq4R7AXOsbwdoBg+42ELoqV6rgaYjdN9onTZu12g8F7Xiey0eytoDSEACR+zAgDzEYr5ejjH06xq6yb8VpSPVxC8zxPY95DGgsOq+IH5Z+de/Sx9B4kOjnZdjarTtR4Xsa85+AqOreGPbc0quPoUxOaeV/wk6q0L1nAcItlNK55k82PWvncRXdiKmZ39guR7i4yV47tHhbzXWVbZNxyzhZHhUsfE0HA/Egxzj6XD16DKQLn9kQJ3kDQe7bVq/EBoDGXd5DieHqvapalAj+LwhWkAasQcDb2r5YvioXsteRwXOJG1eV4zsK6rkIpZeRkbdDnevo6PSVF7AXmDtC7W1mkXXo+xwwtKrqVKjTmMxsRFeFjSw1i5hkG65qkF0haOL4gopYIXPILkz/SsaNMVHhpcAN5UNaCYXgvqV9HCtbbxHwGIzBOn1gEj08s/X/EUHtJa4W1vs3/AHXQK2V+VxsdD9D9Dt5i77vD3iYYPO/in86ybWoC7SO6FrnYNy6XZnZ1zhj9ZK61YQ6J4nUQPtFj4jAAKjlkScHgxWKp4sfDtMEaE2BP7Tu4HfY7xwV3w4ubodfv4a8rceBxfGtfuO9hNWp+qlhqMD7MHV03jrtmvWpUm4em1lUxA4xYb4j18UHHDKBTvsn/AOdT5eCLWLikd6t8kbG4lzSvI6caQIxI5c6G1KTv8MtvuIk89viqp1KAdmcTm3kHytA7r7yV6H6O9kyy3mZSohlCsrSeRJUkRzryOkcdlaaTQZNjII56rZ+Ia5sMMrudr9mrfWCYYfC3TqD5GvKweLdh3zqDqPe1ZU6hYV47j+z7lkgXBvMEEEGN4+fOvpsPiqdcTTPNdzKgdopw/Z7shuAAICAW6ZAOBnEyfKlWxdOm7Ifm3KX1Wt1Xp+zF7thYBB8JfHLIEnHOfu8q8DFPFZvWkQZjn/ZcT3Eulb+ItahHp752xXEx2UyiVl+qP/D83rr+K4nwClOrmWqM0ISuJsC4pRpg8wYI8waqm8scHBJCzwxBDMxYgQJgRO5xzxvTdUkQBCFwuKV+Ku2nVVVSH0OwLTaGmXOQo1EppXePETgrXr0nMwlJ7XEkgiQDHavbSbCcx0mwH8S4XA1XAgW2ct/faPHgpd7J4O3FtybhwTbVQzMZ+JlsoGievhpNxuNqTUZDR+4mAOALjH1QaNFvZN+H9h+F1bfGEAJZ4a5pAgSEtIo6QxBj0U1wuoAkuq1RPe4nwEeJC3DyLNafQe+5WHGcQMvw4I/9q6Hb3FxUHyJqepw7rNqX/mbA8QXeieeoNW+B+8K79oNAK2LrDn/s1I/+LsCfbpUjDNmHVGjxI8QDHeg1DsafL7pnCdpWrmEcahuh8Lr/AJkaGU+oqKuFq0rubbfqDyIsVTarXaH7+CfevKg1OwUcyxAHzNZMpueYaCTwuqLgBJXOu9ovcBHCqGwftbkrZGMacTc33Uad84g9jcMykQcSY/lF3d+xvffhtWJqOd/hjvOn57rJfZ93uVIeze1Ey9yBeNxo+KbfiPQDSsAQABFaV2de4FlRsDQfLA3Q63MyZ1JJUsOQXaeJ1nw+wWpe2rESWK/7xLlv/nUVh8DX2CeRB9CVfXM3+II9VX/H+E/9TZ//AKJ/Wj/p2L/0neBR19L9w8VY9tWIkPr/AN2r3D8kBpfAV9rY5kD1IR1zNhnlf0U/xFmju7F1p5uFtKPUOQ/yU0fCsb/iVGjlLj5W80usJ+Vp9PW/kk8TwXEXlh7iWoKsotguQ6kMpNx4kSBgKJznNa0q+HoOljS7UHMYsbGwnZvceSlzKjxcgcr+f4SH4wzNxXtXGAVh3Ny9blZ8SOgiDPODESAZFWKAIimQ5uo7Qab7CDt5TwJVCtHzAg8iR4ha7HadlFVQXIUAD7K8TgRmE3rF+DrvcXEC/wDM37o65nsFL4jjuHuiLlm4y7HvOGvEfJkn7qunh8RSM03gHhUb9HKXPpuFwe9p+yTY0k6eF4h7bkEi1dVmHLxC3dhwB/CQonatH5wM2JpBw/c0gHkXNlt+IJ4qAAbMdB3H7G/guRwVnTdtrdKW14dlXvbCNDmP9nevl5E+EsrLElZMkV6FZ+ek40wXF4JyuItxayItfKQZiYFlg1sOAdaNo9CfWy9vNfMrvWLtfgBeTTMEGVO8H/SuvB4k4epm1G0LSm/IZWbsbsp7JabgZW3XSd+u+K3xuNp4gCGkEbZVVagfsXSs8OiToVVnfSAJ9Yrz3Pc75jKxTKlClCFimtlsSjQkiDRCFNVKELnf4Hwv/prPvbQ7bZIrt+PxX+q7+orH4el+0eAWvheGt21020VF3hFCiesCuerVqVTmqOJPEytGsa0Q0QnTWcKlJpQhGaIQk8Twtu4IuIjjo6qw+8VpTrVKRmm4jkSPRQ5jXWcJSOH7J4ZDqSxaU9VtoD8wK1fjMS8Q6o4ji4/dS2jTaZDR4LdqrlWigNCFbVRCFNVEIU1UoQjNEIUmiEIzRCFJpQlCINCEniuFt3BpuIriZAYAweo6GtKVWpSOamSDwUuYHCHBYk7I0ApZuG3bM/ZaEa2szq0giQDO0kdAK6jjc5Dqrczh/FJBMaTGsb9eKy6mBDTA3bFs4DhRatpaBZgihQWMsY6muavWNao6oQASZtotGMDWhu5aJrFVCINCUIzQiEJoThSaEQsE10QtFNVEJI6qUIR1UQhV1U4QjNKEKaqIQq3byqCzEBQCSTgADJJNNrHOcGtEkpEgCSot9SSAwJESAQSJEiekimabgASNUAgmAg1ygNTWX6/8XhPh9MwSMe4rp+F+W4v5WlVk0V17RXwyCNQc8saNx+PypHCOkwZgj/lonkPvim2OM1FYU+JA8yMA7T/as34fIHEnQkc4SLYlUXtGVJ0nBUASM6zpH31bsHDgM2wnlAkp5Lor2gCUhT4wGnGNW00jhCA8z8pI5wlkieC1d6J084nY7bb7Vz5DlzbNFMbVnTtAHXgwgJmRkCZj5VucK4Bl/mjulVk0QPaI0o2k+PliVyAZ9zTGDJc5s6edpRkuQtuquSFCq94CJIEkKJMSTsB502sc6YGl+5IkDVSzfVhKsGEkSpBEqSCJHMEEe1D2OYYcIPHjdAINwmzUJqTRCEZpJKTRCIRmhClCFJoQpNCIXN1V0wqU1UQhENRCEdVKEIaqcIU1UQhIvcQwYALIMSc8zGPTfNaNYCJJSTbolSJKyIkRI9JBE1DDlcDE80ESISOz+CSypS3ISZCnOmdwDuROczv0gDbEYh9dwe/Xad/08PVRTpimIbomuKyC0WLunh1gQSSM7ksT7YrtFSmHMdeRY+EK5FioeB1aA2w1kwebMDHyBFAxQYXFm2PIEesFUHxMJ/DWGU2yQDptqhM7Ebx1rKrVa5rwDq4nmpc4Geapb4dwpECdVsgTuEYNvGK0fXpl4vaHbN4hPMJ8UbfCMO62lFQHPTf1pOxDCKg/cSfHRBeL8Vo4jh9RJDEEoU9J51z062VmUjbKiezC4iXgveiANalRBwZJznlXpmD1d/lIPkq6wW4LTYR3gSCF1MCJEFnmPuOOXyrI1abCTcTA8BHsoDxPgu7qryIWaz8dwq3V0OToJ8QBjWP3Sd4mDgg4GYkHahWdRdnZrsO7iNk858VD2B4g6JnC29CKkyFEAkAYG2wAwIHtUVX9Y8viJVNblEJwas4VIhqISVtVKEKaqIQjqpIU1UQhQtQhDVRCFyLd6a7C1NM1VMIRDUQhHVRCSBaiEKaqIQpqohCIaiEKaqUIU1UQhSaEI6qIQjrpQhHXRCFNdKEI66IQud/h5093r+znaJbTM6dRO3nEx866uvGbPHa8uaWW0Lpa65YTU10QhTXShNHXRCSIeiE1YPShJW1UoQprohCOulCEdVEIQ1UQhDXThC8/YevQcEgtQuVlCasHpQhHXShJTXRCFXXThCOuiEKa6UIR10QhTvKIQj3lEIRD0oQp3lEJqG7RlQh3tPKkh31GVEqd9RlTU7+jIhTv6MiUqd9RlTR7yjKhWF2llQmC5U5UJguVMIR10oQp3lGVCneUQhQvRCFNdGVC4tuu0pJwqE0RQUI0kkaNqFU00BShCIoQjSTUoSUpJqU0KUIQamEKpppIUIQNCFSmhGhCstJCaKkpoikmmLUlIJi1KatQhWpJKUJoUIUoSX//2Q==",
      subtitle:"CHON BBQ",
      title:"Tepic, Nay",
      content:"Cerveza, Snack, ALitas, Hamburguesas, Totopos"
    },
    {
      img:"https://pbs.twimg.com/media/DwDPe7oV4AAmT2Y.jpg",
      subtitle:"Paco'sTilla",
      title:"Tepic, Nay",
      content:"Cerveza, Alitas, Costillitas, Nachos"
    },

    
  ]

  constructor() { }

  ngOnInit() {
  }

}
