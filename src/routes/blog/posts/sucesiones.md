---
title: Series that don't have 3s
date: 2022-05-19
outline_depth: 2
topics: "math personal"
---

My 2019 attempt to make a series that has $0$ every third element and $n$ otherwise.

# Backstory

One of the last math topics we did in 9th grade (3º de la ESO) was series. My math teacher at the time (Marta) put up the challenge of coming up with a series that is just like $a_n = n$, except every third number it has to be $0$. I, of course, took the challenge. However, I couldn't have expected how interesting this problem would end up being. Here I've compiled all the solutions I came up with back in 2019. 

# Solutions

## 1. Sines

The function $\sin(n)$ is cyclic, so it makes sense to use it. We can adjust its phase to thirds by multiplying by $\frac{2\pi}{3}$: 

$$
a_n = \sin\left( \frac{2\pi}{3} n \right)
$$

However, I used $\tau$ back then and, while it certainly is a questionable choice, I will respect it today. 

$$
a_n = \sin\left( \frac{n \tau}{3} \right)
$$

Thus, we have $\frac{\sqrt{3}}{2}$, $-\frac{\sqrt{3}}{2}$, $0$, ...

We can normalize these values by multiplying by the reciprocals, $\frac{2}{\sqrt{3}} = \frac{2 \sqrt{3}}{3}$: 

$$
a_n = \sin\left( \frac{n \tau}{3} \right) \frac{2 \sqrt{3}}{3}
$$

To get $1$, $-1$, $0$, ...

And then we can square to get the correct signs: 

$$
a_n = \left(
	\sin\left( \frac{n \tau}{3} \right) \frac{2 \sqrt{3}}{3}
\right)^2
$$

So if we just multiply by the index, $n$, we have our series!

$$
\begin{equation}
	\begin{align*}
	a_n &= n \left(
		\sin\left( \frac{n \tau}{3} \right) \frac{2 \sqrt{3}}{3}
	\right)^2  \\

	&= \frac{4n}{3} \sin^2\left( \frac{n \tau}{3} \right)

	\end{align*}
\end{equation}
$$


It's interesting to note that this method wouldn't work so nicely with periods other than 3. We were lucky that the magnitude of the reciprocal is the same for the two values that weren't 0 (and we couldn't just divide because we would have a problem with $\frac{0}{0}$).

Once I presented this solution to my teacher, she proposed to me a new challenge: sines (and any basic cyclic functions) are banned. What to do now?

## 2. Complex numbers

Acutally, there is quite a simple workaround, but it's kind of cheesy. 

We know that complex numbers can be expressed as 

$$
z = e^{\tau \theta i} = \cos(\theta) + i \sin(\theta)
$$

If they have an argument of $1$. So, if we just take the imaginary part of $z$, we have a sine: 

$$
\Im(e^{\tau \theta i}) = \sin(\theta)
$$

And this way we can substitute our previous result. 

$$
\begin{equation}
	b_n = n \left(
	\Im(e^{\tau \left( \frac{n \tau}{3} \right) \frac{2 \sqrt{3}}{3} i})
\right)^2
\end{equation}
$$

## 3. Check multiples

Let's try to solve it cleanly, with the definition of multples. 

A number $n$ is said to be a multiple of $p$ if: 

$$
\exists k \in \mathbb{Z} : n = p \cdot k
$$

So if we're searching for positive multples of 3, we want the following condition: 

$$
\exists k \in \mathbb{N} : n = 3k
$$

The expression $n = 3k$ implies $3k - n = 0$. However, we don't know value of $k$, so what could we do?

Well, we can just try all of the values of $k$. If (and only if) $n$ is actually a multiple of $3$ the previous difference will be $0$. If we take the product of all the differences, we will have a $0$ when $n$ is a multiple of $3$ and a different number otherwise. 

Things are going to get messy, so let's call this product $p_n$:

$$
p_n = \prod_{k=1}^{\infty} (3k - n)
$$

Now we have $0$ for multiples of 3 and some large product otherwise. Therefore, we have to find some way to leverage some special property that $0$ has. 

One such property is that $0! = 1$. The only other number that has $1$ as its factorial is $1! = 1$, but if we just multiply $p_n$ by $2$ we will have our desired effect. We should also square it to avoid getting the gamma definition of the factorial when applied to negative numbers. 

This way, not only every other number will not return $1$, *it will return an even number* (since every factorial after $2!$ has a factor of $2$). To summirize: 

$$
2{p_n}^2 = \begin{cases} 
      1 & \textrm{if} & x = 0 \\
      \textrm{even} & \textrm{if} & x \ne 0
\end{cases}
$$

Now we can use a property of the parity of numbers. Namely, the fact that
$(-1)^{2k} = 1$ and $(-1)^{2k + 1} = -1$. We can reduce to $0$ the odd case by adding $1$ and, since that will retun $2$ on the even case, we can divide by $2$. Thus we have a solution: 

$$
\begin{equation}
	c_n = \frac{n}{2} \left(
		(-1)^{2{p_n}^2!} + 1
	\right)
\end{equation}
$$

It's easy to see that the product will never have to go past $n$ (or even $\frac{n}{3}$). I find the infinity more mathematically aesthetic, but I used $n$ on the implementation. Also, we have to reduce the product because we are taking a hilariously big factorial which will never be able to compute after a certain point. We can do this because we can prove that the parity is the only important aspect and will remain the same. 

This solution very easy to modify for other periods (just replace the $3$!) and probably the cleanest. 

## 4. Subtraction

Another approach is to cyclify our series, by substracting $3$ every third element. 

Let's try to subtract $3$ after the third element just once. We can separate values bigger and smaller than $3$ by subtracting... $3.5$. It's quite ugly, but this way we have negative values between $1$ and $3$ and positive values afterwards. 

We can extract the sign of a value $x$ if we do $\frac{|x|}{x}$, where $x \ne 0$, to avoid using less conventional notation. 

We can do the same thing as for solution $3$ to convert these values into $0$ before and $1$ after: 

$$
\frac{1}{2}\left(\frac{|n - 3.5|}{n - 3.5} + 1 \right)
$$

So if subtract that to $n$ we would have $1$, $2$, $3$, $1$, $2$, $3$, $4$, ...

We have the same series, but shifted over by $3$! This means we can do the same thing but for $n + 3$. Then we would have to do the same but for $n + 6$, then $n + 9$, etc...

So we have sum where the general term is $(n - 3k) - 3.5)$. As we only care for the sign and not the magnitude, we can de-uglify the expresion by multiplying by $2$. This way, the expresion is as follows: 

$$
s_n = n - \frac{3}{2} \sum_{k = 1}^{\infty} \left(
	\frac{|2n - 6k - 7|}{2n + 6k - 7} + 1
\right)
$$

The expression $s_n$ returns $1$, $2$, $3$, $1$, $2$, $3$, ... indefinitely.

The easiest way to make it have $0$ every third element is to subtract $2$, offset it and do the same thing as with the sines. Back in the day for some reason I did it using factorials. The expression in question is the following: 

$$
\begin{equation}
	d_n = - n \left( \frac{s_n! - s_n}{3} - 1 \right)
\end{equation}
$$

There's no justification for this last step other than "it just kinda works".


## 5. Unbeknownst recursion

The previous solution was very recursive in nature. Could we just use recursion? 

This is the last, and might be the most interesting. Looking back, I'm very surprised, since I hadn't heard of recursion back then and I was kinda redescovering it myself. 

Let's take 

$$
s_n = \frac{3}{2}\left(\frac{ |2n - 7| }{2n - 7} + 1 \right)
$$

Which is useful, because:

$$
c_n = n - s_n = \begin{cases} 
      n & n < 3 \\
      n - 3 & n \ge 3
\end{cases}
$$

As before, this is the start of a counter that goes $1$, $2$, $3$, $1$, $2$, $3$, $4$, $5$, ... So this counter works until $n = 6$. 

One way to extend it is to "change" the $n$. More precisely, if we input numbers between $1$ and $6$ to $c_n$, then it's going to work. The thing is that $c_n$ provides numbers between $1$ and $6$ until $n = 9$!

$$
e_n = c_{c_n}
$$

Remember that $c_n$ was defined as:

$$
c_n = n - \frac{3}{2}\left(\frac{ |2n - 7| }{2n - 7} + 1 \right)
$$

So $c_{c_n}$ is:

$$
\begin{align*}
	c_{c_n}  &= c_n &- \frac{3}{2}\left(\frac{ |2c_n - 7| }{2c_n - 7} + 1 \right) \\

	&= n - \frac{3}{2}\left(\frac{ |2n - 7| }{2n - 7} + 1 \right) &- \frac{3}{2}\left(\frac{ |2c_n - 7| }{2c_n - 7} + 1 \right)
\end{align*}
$$

We can then input $c_{c_n}$ into $c_n$ to get it to work until $n = 12$:

$$
\begin{align*}
	c_{c_{c_n}} 
	&= c_n &- \frac{3}{2}\left(\frac{ |2c_n - 7| }{2c_n - 7} + 1 \right) - \frac{3}{2}\left(\frac{ |2c_{c_n} - 7| }{2c_{c_n} - 7} + 1 \right) \\
	
	&= n - \frac{3}{2}\left(\frac{ |2n - 7| }{2n - 7} + 1 \right) &- \frac{3}{2}\left(\frac{ |2c_n - 7| }{2c_n - 7} + 1 \right) - \frac{3}{2}\left(\frac{ |2c_{c_n} - 7| }{2c_{c_n} - 7} + 1 \right)
\end{align*}
$$

And now the recursive nature is becoming apparent. Let's call the recursive counter, $r_n$:

$$
r_n = n - \frac{3}{2}\left(\frac{ |2r_n - 7| }{2r_n - 7} + 1 \right) 
$$

There is still one small problem. This recursion, as it stands, is infinte; any implementation would stack overflow. The easy solution is to define something like $r_0 = 0$. However, we can just prove it!

### Proof


First, observe that $\frac{ |2r_n - 7| }{2r_n - 7}$ is always either $1$ or $-1$. This means that $\frac{ |2r_n - 7| }{2r_n - 7} + 1$ is always $0$ or $2$, which in turn implies that $-\frac{3}{2}\left(\frac{ |2r_n - 7| }{2r_n - 7} + 1 \right)$ is always $0$ or $3$.

Using this, we can deduce that $\forall n (r_n \le n)$, since $r_n = n - 0$ or $r_n = n - 3$ and both satisy this condition. 

Now, according to the definition of $r_n$, the value of $r_0$ is the following: 

$$
r_0 =  0 - \frac{3}{2}\left(\frac{ |2r_0 - 7| }{2r_0 - 7} + 1 \right)
$$

We know that $r_0$ can be, at most, $0$. However, any value less than $3$ will evaluate to $0$ in $\frac{3}{2}\left(\frac{ |2r_0 - 7| }{2r_0 - 7} + 1 \right)$. This means that $r_0 = 0 - 0 = 0$

QED.

So, finally, we can make the last series using the counter, and the same approach used in solution 4:

$$
\begin{equation}
	e_n = -n \left(
		\frac{r_n! - r_n}{3} - 1
	\right)
\end{equation}
$$

*Isn't it beautiful?*

# Epilogue

This is the technical part of this project, but in 2020 I also made [a video (in spanish)](https://www.youtube.com/watch?v=1OXZJ_3qhYU) of my journey to get to the solutions.
Finally, I've implemented this in a [Pluto notebook written in Julia](https://github.com/Odilf/sucesiones). 