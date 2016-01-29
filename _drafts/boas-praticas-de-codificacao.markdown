Anotações feitas a partir de revisão de código no Noosfero:

**app/helpers/custom_fields_helper.rb:**

{% highlight ruby %}
def render_field_form(format)
  "custom_fields/formats/#{format}"
end
{% endhighlight %}

**app/views/shared/_custom_fields.html.erb:**
    
{% highlight erb %}
<% rendered = render(
    :partial => render_field_form(field.format),
    :locals => {
        :field => field,
        :profile => profile,
        :name => "profile_data[custom_values[#{field.name}[value]]]"
    }
  )
%>
{% endhighlight %}

Um método helper que é utilizado em apenas 1 lugar, não evitou duplicação de código
e adicionou um "salto" para quem estiver lendo compreender o código. Ao invés disso
melhor seria simplesmente fazer o seguinte:

Remover o método helper `render_field_form` e alterar a view para o seguinte:

**app/views/shared/_custom_fields.html.erb:**
    
{% highlight erb %}
<% rendered = render(
    :partial => "custom_fields/formats/#{field.format}",
    :locals => {
        :field => field,
        :profile => profile,
        :name => "profile_data[custom_values[#{field.name}[value]]]"
    }
  )
%>
{% endhighlight %}
