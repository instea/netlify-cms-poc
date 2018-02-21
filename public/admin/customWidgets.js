var ColorControl = createClass({
  handleChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    var value = this.props.value;
    return h('input', { type: 'color', value: value || '', onChange: this.handleChange });
  }
});

var ColorPreview = createClass({
  render: function() {
    return h('div', { style: { width: 200, height: '1.5em', backgroundColor: this.props.value } });
  }
});

CMS.registerWidget('color', ColorControl, ColorPreview);