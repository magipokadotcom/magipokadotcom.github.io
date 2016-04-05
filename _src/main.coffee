$ ->
  if pointerEventsSupported()
    $('<div id="content-overlay"></div>')
      .appendTo $('#content')

  $('#parking_form').on 'submit', ->
    $tsearch = $('#tsearch')
    commentALaNiconico $tsearch.val()
    $tsearch.val ''
    false

scrolling = {}
commentALaNiconico = (text) ->
  if not text
    return false

  $area = $('#content-overlay')
  if $area.length is 0
    $area = $('#content')

  areaWidth = $area.width()
  $comment = $("<span class=\"marquee\">#{text}</span>")
    .css 'left', areaWidth
    .appendTo $area
  commentWidth = $comment.width()
  startTime = new Date().valueOf()
  lifetime = 4000
  elapsed = 0
  reachingTime = startTime + (areaWidth * lifetime / (areaWidth + commentWidth))
  $comment.data 'reachingTime', reachingTime

  positionFromTop = 0
  while true
    $c = scrolling[positionFromTop]
    if not $c or
    ($c.position().left + $c.width() < areaWidth and
    $c.data('reachingTime') < reachingTime)
      $comment
        .css 'top', "#{positionFromTop}em"
      scrolling[positionFromTop] = $comment
      break
    else
      positionFromTop++

  intervalId = setInterval ->
    elapsed = new Date().valueOf() - startTime
    if elapsed < lifetime
      $comment.css 'left',
        -(areaWidth + commentWidth) / lifetime * elapsed + areaWidth
    else
      clearInterval intervalId
      $comment.remove()
      if scrolling[positionFromTop] is $comment
        scrolling[positionFromTop] = null
  , 50

# http://stackoverflow.com/a/8898475
pointerEventsSupported = ->
  el = document.createElement 'span'
  return false if 'pointerEvents' not of el.style
  el.style.display = 'none'
  el.style.pointerEvents = 'none'
  el.style.pointerEvents = 'x'
  document.documentElement.appendChild el
  ret = window.getComputedStyle?(el, '').pointerEvents is 'none'
  document.documentElement.removeChild el
  ret
