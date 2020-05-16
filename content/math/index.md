+++
title = "関数の極限値の基本性質"
date = 2020-05-16
+++

## 商の関数の極限の証明
$
    \displaystyle \lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{\alpha}{\beta} ( \beta \neq 0)
$
を証明する。  

$
    \displaystyle \lim_{ x \to a } g(x) = \beta
$
の定義より、  
$
    \forall \epsilon \gt 0 
$
に対して
$
    \exists \delta _g \gt 0 \\ \mbox{ s.t.} ( \forall x, 0 \lt \vert x - a \vert \lt \delta _g \Rightarrow \vert \beta - g(x) \vert \lt \epsilon _g)
$

$
    \\ \\ \\ \\ \\ \\ \vert \beta - g(x) \vert \lt \epsilon _g
$  
$
\Leftrightarrow - \epsilon _g \lt \beta - g(x) \lt \epsilon _g
$  
$
\Leftrightarrow \beta - \epsilon _g \lt g(x) \lt \beta + \epsilon _g
$

$ \vert g(x) \vert $ は $\vert \beta - \epsilon _g \vert$ よりも大きいか、$\vert \beta + \epsilon _g \vert$ よりも大きいかのどちらかである。

よって、$ L = min( \vert \beta - \epsilon _g \vert, \vert \beta + \epsilon _g \vert)$ とすると  
$ \vert g(x) \vert \gt L $ が成り立つ。

以上を踏まえて、$ \displaystyle \lim_{ x \to a } \frac{1}{g(x)} = \frac{1}{\beta} $ を証明する。

$ \forall \epsilon _g \gt 0 $ に対して、
$
    \exists \delta _g \gt 0 \\ \mbox {s.t.} ( \forall x, 0 \lt \vert x - a \vert \lt \delta _g \Rightarrow \vert \frac{1}{\beta} - \frac{1}{g(x)} \vert < \epsilon _g)
$

$\displaystyle \\ \\ \\ \\ | \frac{1}{\beta} - \frac{1}{g(x)} |$  
$\displaystyle = \frac{|g(x) - \beta|}{|\beta||g(x)|} $  

ここで、$ L > g(x), \\ | \beta - \epsilon _g | < \epsilon _g $より、

$\displaystyle = \frac{|g(x) - \beta|}{|\beta||g(x)|} < \frac{\epsilon _g}{L|\beta|} = \epsilon $

よって、$ \displaystyle \lim_{ x \to a } \frac{1}{g(x)} = \frac{1}{\beta} $ が証明された。

次に、$\displaystyle \lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{\alpha}{\beta}$を証明する。

$\displaystyle \frac{1}{g(x)} = h(x) $とすると、$\displaystyle \lim_{ x \to a } h(x) = \frac{1}{\beta}$

$\displaystyle \lim_{ x \to a } f(x) = \alpha$と積の関数の極限の性質より、$\displaystyle \lim_{ x \to a } f(x)h(x) = \frac{\alpha}{\beta}$

$\displaystyle \frac{1}{g(x)} = h(x)$ だったので、$\displaystyle \lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{\alpha}{\beta}$

以上より、$\displaystyle \lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{\alpha}{\beta}$が証明された。

## 感想
　この証明は一通り理解することができましたが、中々大変でした。$|g(x)| > L$の証明、$ \lim_{ x \to a } \frac{1}{g(x)} = \frac{1}{\beta} $の証明を踏んで最後に$\lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{\alpha}{\beta} ( \beta \neq 0)$ができるというボリュームの証明はこれがはじめてです。これからこの手の証明が増えていくため、ε-δ論法のトレーニングをしないといけないなと思います。
　一通り理解することができたと述べましたが、疑問が1つあります。それは$L$を用いている理由です。$L$ を用いなくても、$\epsilon _g = g(x)|\beta|\epsilon$ と置けば 　$\epsilon$ でおさまるのではないかと思うのですが、それではダメなのでしょうか？$L$を定義している部分を見ればわかるのかもしれませんが、自分には冗長ではないかとしか思えませんでした・・・。