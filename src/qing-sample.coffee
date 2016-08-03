class QingSample extends QingModule

  @opts:
    el: null

  constructor: (opts) ->
    super

    @el = $ @opts.el
    unless @el.length > 0
      throw new Error 'QingModule: option el is required'

    @opts = $.extend {}, QingSample.opts, @opts
    @_render()

  _render: ->
    @el.append """
      <p>This is a sample component.</p>
    """
    @el.addClass 'qing-sample'
      .data 'qingSample', @

  destroy: ->
    @el.empty()
      .removeData 'qingSample'

module.exports = QingSample
