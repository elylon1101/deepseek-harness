/** `trajectory` namespace dictionaries (view, toolbar, ledger, inspector, timeline). */

/** Dictionary namespace owned by this plugin. */
export const NS = 'trajectory'

/** The trajectory dictionary key set (the source of truth for both locales). */
export type TrajectoryKey =
  | 'view.trajectory'
  | 'toolbar.aria'
  | 'toolbar.duration'
  | 'toolbar.useActualDuration'
  | 'toolbar.useEqualWidth'
  | 'toolbar.actualTime'
  | 'toolbar.turns'
  | 'toolbar.expandTurns'
  | 'toolbar.collapseTurns'
  | 'toolbar.calls'
  | 'toolbar.expandCalls'
  | 'toolbar.collapseCalls'
  | 'toolbar.search'
  | 'toolbar.searchPlaceholder'
  // Group titles folded from the event ledger.
  | 'group.message'
  | 'group.step'
  | 'group.compaction'
  // Cell-level status and fallback texts.
  | 'cell.compacting'
  | 'cell.compactionFailed'
  | 'cell.contextCompacted'
  | 'cell.toolCallOnly'
  | 'cell.noOutput'
  | 'cell.noContent'
  | 'cell.error'
  // System-prompt change labels.
  | 'prompt.initial'
  | 'prompt.updated'
  | 'prompt.toolsUpdated'
  | 'prompt.bothUpdated'
  // Record kind tags.
  | 'kind.system'
  | 'kind.user'
  | 'kind.context'
  | 'kind.compacted'
  | 'kind.message'
  | 'kind.tool'
  | 'kind.subtool'
  // Turn section labels.
  | 'section.betweenTurns'
  | 'section.turn'
  // Request boundary and inspector header labels.
  | 'request.label'
  | 'request.compaction'
  | 'request.compactionSuffix'
  // Details panel chrome.
  | 'details.aria'
  | 'details.resizeAria'
  | 'details.resizeTitle'
  | 'details.close'
  | 'details.thinking'
  // History loading controls.
  | 'history.loading'
  | 'history.loadEarlier'
  | 'history.loadingEarlier'
  // Record states.
  | 'status.completed'
  | 'status.pending'
  | 'status.failed'
  // Inspector tabs.
  | 'tab.summary'
  | 'tab.options'
  | 'tab.usage'
  | 'tab.timing'
  | 'tab.payload'
  | 'tab.result'
  | 'tab.schema'
  | 'tab.preview'
  | 'tab.raw'
  | 'tab.rawOutput'
  | 'tab.source'
  | 'tab.systemPrompt'
  | 'tab.tools'
  | 'tab.diff'
  // Overview rows and section headings.
  | 'overview.status'
  | 'overview.purpose'
  | 'overview.provider'
  | 'overview.model'
  | 'overview.toolCalls'
  | 'overview.subtoolCalls'
  | 'overview.error'
  | 'overview.retry'
  | 'overview.retryScheduled'
  | 'overview.retryScheduledOf'
  | 'overview.retryDelay'
  | 'overview.result'
  | 'overview.source'
  | 'overview.hierarchy'
  | 'overview.duration'
  | 'overview.tokens'
  | 'overview.thisRequest'
  | 'overview.sessionCumulative'
  | 'overview.compacted'
  | 'overview.assistantMessage'
  | 'overview.toolCall'
  | 'overview.requestTiming'
  // Assistant timing panel.
  | 'timing.started'
  | 'timing.totalDuration'
  | 'timing.ttft'
  | 'timing.generation'
  | 'timing.throughput'
  | 'timing.timingSource'
  | 'timing.notRecorded'
  | 'timing.stepStartUnavailable'
  | 'timing.pending'
  | 'timing.firstTokenUnavailable'
  | 'timing.usageUnavailable'
  | 'timing.outputTokensUnavailable'
  | 'timing.durationTooShort'
  | 'timing.notAvailable'
  | 'timing.sessionTimestamps'
  | 'timing.sessionTimestampsRunning'
  | 'timing.showLocalTime'
  | 'timing.showUnix'
  // Token/usage rows.
  | 'usage.tokens'
  | 'usage.reasoning'
  | 'usage.content'
  | 'usage.input'
  | 'usage.cached'
  | 'usage.cacheCreated'
  | 'usage.other'
  | 'usage.output'
  | 'usage.notReported'
  // Payload / options / schema / tools / source / system empty states and labels.
  | 'payload.noPayload'
  | 'payload.noResult'
  | 'options.notRecorded'
  | 'options.jsonLabel'
  | 'schema.unavailable'
  | 'schema.parameters'
  | 'schema.jsonLabel'
  | 'tools.none'
  | 'source.notRecorded'
  | 'source.jsonLabel'
  | 'source.unknown'
  | 'source.user'
  | 'source.plugin'
  | 'source.pluginWithName'
  | 'source.goal'
  | 'source.goalRound'
  | 'source.blockLabel'
  | 'system.none'
  | 'json.resultLabel'
  | 'json.payloadLabel'
  // Collapsed-row summaries and list placeholders.
  | 'summary.stepsOne'
  | 'summary.stepsMany'
  | 'summary.callsOne'
  | 'summary.callsMany'
  | 'list.toolCallOnly'
  // Row-level accessible labels.
  | 'aria.collapsedSummary'
  | 'aria.collapseKindTurn'
  | 'aria.collapseKindAssistant'
  | 'aria.requestCompaction'
  | 'aria.requestRowPrefix'
  | 'aria.noContent'
  | 'aria.openBlock'
  | 'aria.openCallSummary'
  | 'aria.openImage'
  // Timeline overview.
  | 'timeline.aria'
  | 'timeline.overviewAria'
  | 'timeline.laneInput'
  | 'timeline.laneModel'
  | 'timeline.laneTools'
  | 'timeline.noTiming'
  | 'timeline.total'
  | 'timeline.startedAt'
  | 'timeline.ttftDecoding'
  | 'timeline.loadEarlier'
  | 'timeline.loadingEarlier'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The trajectory view: tab label, toolbar, ledger, inspector, and timeline strings. */
    'trajectory': TrajectoryKey
  }
}

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<TrajectoryKey, string> = {
  'view.trajectory': '轨迹',
  'toolbar.aria': '轨迹工具栏',
  'toolbar.duration': '时长',
  'toolbar.useActualDuration': '按实际时长显示',
  'toolbar.useEqualWidth': '等宽显示操作',
  'toolbar.actualTime': '实际时间',
  'toolbar.turns': '轮次',
  'toolbar.expandTurns': '展开轮次',
  'toolbar.collapseTurns': '收起轮次',
  'toolbar.calls': '调用',
  'toolbar.expandCalls': '展开调用',
  'toolbar.collapseCalls': '收起调用',
  'toolbar.search': '搜索轨迹',
  'toolbar.searchPlaceholder': '搜索',
  'group.message': '消息',
  'group.step': '步骤 {step}',
  'group.compaction': '压缩 {seq}',
  'cell.compacting': '正在压缩上下文…',
  'cell.compactionFailed': '压缩失败',
  'cell.contextCompacted': '上下文已压缩',
  'cell.toolCallOnly': '仅工具调用',
  'cell.noOutput': '无输出',
  'cell.noContent': '无内容',
  'cell.error': '错误',
  'prompt.initial': '初始系统提示词',
  'prompt.updated': '系统提示词已更新',
  'prompt.toolsUpdated': '工具已更新',
  'prompt.bothUpdated': '系统提示词与工具已更新',
  'kind.system': '系统',
  'kind.user': '用户',
  'kind.context': '上下文',
  'kind.compacted': '压缩',
  'kind.message': '助手',
  'kind.tool': '工具',
  'kind.subtool': '子工具',
  'section.betweenTurns': '轮次之间',
  'section.turn': '轮次 {turn}',
  'request.label': '请求 #{number}',
  'request.compaction': '压缩',
  'request.compactionSuffix': ' · 压缩',
  'details.aria': '事件详情',
  'details.resizeAria': '调整事件详情宽度',
  'details.resizeTitle': '拖动调整宽度，双击重置',
  'details.close': '关闭详情',
  'details.thinking': '思考',
  'history.loading': '正在加载轨迹…',
  'history.loadEarlier': '加载更早历史',
  'history.loadingEarlier': '正在加载更早历史…',
  'status.completed': '已完成',
  'status.pending': '待处理',
  'status.failed': '失败',
  'tab.summary': '摘要',
  'tab.options': '选项',
  'tab.usage': '用量',
  'tab.timing': '计时',
  'tab.payload': '载荷',
  'tab.result': '结果',
  'tab.schema': '模式',
  'tab.preview': '预览',
  'tab.raw': '原始',
  'tab.rawOutput': '原始输出',
  'tab.source': '来源',
  'tab.systemPrompt': '系统提示词',
  'tab.tools': '工具',
  'tab.diff': '差异',
  'overview.status': '状态',
  'overview.purpose': '用途',
  'overview.provider': '提供商',
  'overview.model': '模型',
  'overview.toolCalls': '工具调用',
  'overview.subtoolCalls': '子工具调用',
  'overview.error': '错误',
  'overview.retry': '重试',
  'overview.retryScheduled': '计划第 {attempt} 次',
  'overview.retryScheduledOf': '第 {attempt} / {max} 次',
  'overview.retryDelay': '重试延迟',
  'overview.result': '结果',
  'overview.source': '来源',
  'overview.hierarchy': '层级',
  'overview.duration': '时长',
  'overview.tokens': '令牌数',
  'overview.thisRequest': '本次请求',
  'overview.sessionCumulative': '会话累计',
  'overview.compacted': '已压缩',
  'overview.assistantMessage': '助手消息',
  'overview.toolCall': '工具调用',
  'overview.requestTiming': '请求计时',
  'timing.started': '开始时间',
  'timing.totalDuration': '总时长',
  'timing.ttft': 'TTFT',
  'timing.generation': '生成',
  'timing.throughput': '吞吐',
  'timing.timingSource': '计时来源',
  'timing.notRecorded': '未记录',
  'timing.stepStartUnavailable': '步骤开始时间不可用',
  'timing.pending': '待处理',
  'timing.firstTokenUnavailable': '首令牌时间不可用',
  'timing.usageUnavailable': '用量不可用',
  'timing.outputTokensUnavailable': '输出令牌数不可用',
  'timing.durationTooShort': '时长过短',
  'timing.notAvailable': '不可用',
  'timing.sessionTimestamps': '会话时间戳',
  'timing.sessionTimestampsRunning': '会话时间戳（进行中）',
  'timing.showLocalTime': '显示本地时间',
  'timing.showUnix': '显示 Unix 时间戳',
  'usage.tokens': '令牌数',
  'usage.reasoning': '推理',
  'usage.content': '内容',
  'usage.input': '输入',
  'usage.cached': '缓存',
  'usage.cacheCreated': '新建缓存',
  'usage.other': '其他',
  'usage.output': '输出',
  'usage.notReported': '未报告用量',
  'payload.noPayload': '未捕获载荷',
  'payload.noResult': '未捕获结果',
  'options.notRecorded': '未记录选项',
  'options.jsonLabel': '请求选项 JSON',
  'schema.unavailable': '模式不可用',
  'schema.parameters': '参数',
  'schema.jsonLabel': '{name} 参数 JSON',
  'tools.none': '本次请求没有工具',
  'source.notRecorded': '未记录来源',
  'source.jsonLabel': '消息来源 JSON',
  'source.unknown': '未知',
  'source.user': '用户',
  'source.plugin': '插件',
  'source.pluginWithName': '插件 · {plugin}',
  'source.goal': '目标',
  'source.goalRound': '目标 · 第 {round} 轮',
  'source.blockLabel': '块 #{index} {type}',
  'system.none': '本次请求没有系统提示词',
  'json.resultLabel': '结果 JSON',
  'json.payloadLabel': '载荷 JSON',
  'summary.stepsOne': '{count} 步',
  'summary.stepsMany': '{count} 步',
  'summary.callsOne': '{count} 次工具调用',
  'summary.callsMany': '{count} 次工具调用',
  'list.toolCallOnly': '（仅工具调用）',
  'aria.collapsedSummary': '已折叠{kind}摘要，{summary}',
  'aria.collapseKindTurn': '轮次',
  'aria.collapseKindAssistant': '助手',
  'aria.requestCompaction': '请求 {request}，压缩',
  'aria.requestRowPrefix': '请求 {request}，',
  'aria.noContent': '无内容',
  'aria.openBlock': '打开块 #{index} 的工具调用摘要',
  'aria.openCallSummary': '打开工具调用摘要',
  'aria.openImage': '打开图片',
  'timeline.aria': '轨迹时间线',
  'timeline.overviewAria': '时间线概览；水平拖动以聚焦事件',
  'timeline.laneInput': '输入',
  'timeline.laneModel': '模型',
  'timeline.laneTools': '工具',
  'timeline.noTiming': '暂无时间数据',
  'timeline.total': '总计 {duration}',
  'timeline.startedAt': '开始于 {time}',
  'timeline.ttftDecoding': 'TTFT {ttft} · 解码 {decoding}',
  'timeline.loadEarlier': '点击加载更早历史',
  'timeline.loadingEarlier': '正在加载更早历史…',
}

/** English dictionary. */
export const en: Record<TrajectoryKey, string> = {
  'view.trajectory': 'Trajectory',
  'toolbar.aria': 'Trajectory toolbar',
  'toolbar.duration': 'Duration',
  'toolbar.useActualDuration': 'Use actual duration',
  'toolbar.useEqualWidth': 'Use equal-width operations',
  'toolbar.actualTime': 'Actual time',
  'toolbar.turns': 'Turns',
  'toolbar.expandTurns': 'Expand turns',
  'toolbar.collapseTurns': 'Collapse turns',
  'toolbar.calls': 'Calls',
  'toolbar.expandCalls': 'Expand calls',
  'toolbar.collapseCalls': 'Collapse calls',
  'toolbar.search': 'Search trajectory',
  'toolbar.searchPlaceholder': 'Search',
  'group.message': 'Message',
  'group.step': 'Step {step}',
  'group.compaction': 'Compaction {seq}',
  'cell.compacting': 'Compacting context…',
  'cell.compactionFailed': 'Compaction failed',
  'cell.contextCompacted': 'Context compacted',
  'cell.toolCallOnly': 'Tool call only',
  'cell.noOutput': 'No output',
  'cell.noContent': 'No content',
  'cell.error': 'error',
  'prompt.initial': 'Initial System Prompt',
  'prompt.updated': 'System Prompt Updated',
  'prompt.toolsUpdated': 'Tools Updated',
  'prompt.bothUpdated': 'System Prompt and Tools Updated',
  'kind.system': 'SYSTEM',
  'kind.user': 'USER',
  'kind.context': 'CONTEXT',
  'kind.compacted': 'COMPACTED',
  'kind.message': 'ASSISTANT',
  'kind.tool': 'TOOL',
  'kind.subtool': 'SUBTOOL',
  'section.betweenTurns': 'Between turns',
  'section.turn': 'Turn {turn}',
  'request.label': 'Request #{number}',
  'request.compaction': 'Compaction',
  'request.compactionSuffix': ' · Compaction',
  'details.aria': 'Event details',
  'details.resizeAria': 'Resize event details',
  'details.resizeTitle': 'Drag to resize. Double-click to reset.',
  'details.close': 'Close details',
  'details.thinking': 'Thinking',
  'history.loading': 'Loading trajectory…',
  'history.loadEarlier': 'Load earlier history',
  'history.loadingEarlier': 'Loading earlier history…',
  'status.completed': 'Completed',
  'status.pending': 'Pending',
  'status.failed': 'Failed',
  'tab.summary': 'Summary',
  'tab.options': 'Options',
  'tab.usage': 'Usage',
  'tab.timing': 'Timing',
  'tab.payload': 'Payload',
  'tab.result': 'Result',
  'tab.schema': 'Schema',
  'tab.preview': 'Preview',
  'tab.raw': 'Raw',
  'tab.rawOutput': 'Raw Output',
  'tab.source': 'Source',
  'tab.systemPrompt': 'System Prompt',
  'tab.tools': 'Tools',
  'tab.diff': 'Diff',
  'overview.status': 'Status',
  'overview.purpose': 'Purpose',
  'overview.provider': 'Provider',
  'overview.model': 'Model',
  'overview.toolCalls': 'Tool calls',
  'overview.subtoolCalls': 'Subtool calls',
  'overview.error': 'Error',
  'overview.retry': 'Retry',
  'overview.retryScheduled': 'Scheduled {attempt}',
  'overview.retryScheduledOf': 'Scheduled {attempt} of {max}',
  'overview.retryDelay': 'Retry delay',
  'overview.result': 'Result',
  'overview.source': 'Source',
  'overview.hierarchy': 'Hierarchy',
  'overview.duration': 'Duration',
  'overview.tokens': 'Tokens',
  'overview.thisRequest': 'This request',
  'overview.sessionCumulative': 'Session cumulative',
  'overview.compacted': 'Compacted',
  'overview.assistantMessage': 'Assistant Message',
  'overview.toolCall': 'Tool Call',
  'overview.requestTiming': 'Request Timing',
  'timing.started': 'Started',
  'timing.totalDuration': 'Total duration',
  'timing.ttft': 'TTFT',
  'timing.generation': 'Generation',
  'timing.throughput': 'Throughput',
  'timing.timingSource': 'Timing source',
  'timing.notRecorded': 'Not recorded',
  'timing.stepStartUnavailable': 'Step start unavailable',
  'timing.pending': 'Pending',
  'timing.firstTokenUnavailable': 'First token unavailable',
  'timing.usageUnavailable': 'Usage unavailable',
  'timing.outputTokensUnavailable': 'Output tokens unavailable',
  'timing.durationTooShort': 'Duration too short',
  'timing.notAvailable': 'Not available',
  'timing.sessionTimestamps': 'Session timestamps',
  'timing.sessionTimestampsRunning': 'Session timestamps (running)',
  'timing.showLocalTime': 'Show local time',
  'timing.showUnix': 'Show Unix timestamp',
  'usage.tokens': 'Tokens',
  'usage.reasoning': 'Reasoning',
  'usage.content': 'Content',
  'usage.input': 'Input',
  'usage.cached': 'Cached',
  'usage.cacheCreated': 'Cache created',
  'usage.other': 'Other',
  'usage.output': 'Output',
  'usage.notReported': 'Usage not reported',
  'payload.noPayload': 'No payload captured',
  'payload.noResult': 'No result captured',
  'options.notRecorded': 'Options not recorded',
  'options.jsonLabel': 'Request options JSON',
  'schema.unavailable': 'Schema unavailable',
  'schema.parameters': 'Parameters',
  'schema.jsonLabel': '{name} parameters JSON',
  'tools.none': 'No tools in this request',
  'source.notRecorded': 'Source not recorded',
  'source.jsonLabel': 'Message source JSON',
  'source.unknown': 'Unknown',
  'source.user': 'User',
  'source.plugin': 'Plugin',
  'source.pluginWithName': 'Plugin · {plugin}',
  'source.goal': 'Goal',
  'source.goalRound': 'Goal · Round {round}',
  'source.blockLabel': 'Block #{index} {type}',
  'system.none': 'No system prompt in this request',
  'json.resultLabel': 'Result JSON',
  'json.payloadLabel': 'Payload JSON',
  'summary.stepsOne': '{count} step',
  'summary.stepsMany': '{count} steps',
  'summary.callsOne': '{count} tool call',
  'summary.callsMany': '{count} tool calls',
  'list.toolCallOnly': '(tool call only)',
  'aria.collapsedSummary': 'Collapsed {kind} summary, {summary}',
  'aria.collapseKindTurn': 'turn',
  'aria.collapseKindAssistant': 'assistant',
  'aria.requestCompaction': 'Request {request}, compaction',
  'aria.requestRowPrefix': 'Request {request}, ',
  'aria.noContent': 'no content',
  'aria.openBlock': 'Open Block #{index} tool call summary',
  'aria.openCallSummary': 'Open tool call summary',
  'aria.openImage': 'Open image',
  'timeline.aria': 'Trajectory timeline',
  'timeline.overviewAria': 'Timeline overview; drag horizontally to focus events',
  'timeline.laneInput': 'Input',
  'timeline.laneModel': 'Model',
  'timeline.laneTools': 'Tools',
  'timeline.noTiming': 'No timing data',
  'timeline.total': 'Total {duration}',
  'timeline.startedAt': 'Started {time}',
  'timeline.ttftDecoding': 'TTFT {ttft} · Decoding {decoding}',
  'timeline.loadEarlier': 'Click to load earlier history',
  'timeline.loadingEarlier': 'Loading earlier history…',
}
